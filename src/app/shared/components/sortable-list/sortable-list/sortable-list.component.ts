import {
  ChangeDetectionStrategy,
  Component,
  HostListener,
  linkedSignal,
  model,
  ModelSignal,
  signal,
  WritableSignal,
} from '@angular/core';

import { NumberedTextItem } from '../../../types/numbered-text-item';
import { Position } from '../../../types/position';
import { DraggableItemComponent } from '../draggable-item/draggable-item.component';
import { ListItemComponent } from '../list-item/list-item.component';
import { ObserverItemComponent } from '../observer-item/observer-item.component';

// Is needed to fix the number of drag item to avoid setting number the same as existing one
const TEMP_INDEX_FIX = 0.5;

@Component({
  selector: 'clw-sortable-list',
  imports: [ObserverItemComponent, DraggableItemComponent, ListItemComponent],
  templateUrl: './sortable-list.component.html',
  styleUrl: './sortable-list.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SortableListComponent {
  public items: ModelSignal<NumberedTextItem[]> = model([] as NumberedTextItem[]);

  protected draggableItem: WritableSignal<NumberedTextItem | null> = signal(null);
  protected isDragging = linkedSignal(() => this.draggableItem() !== null);
  protected dragStartPosition: WritableSignal<Position> = signal({ x: 0, y: 0 } as Position);
  protected mousePosition: WritableSignal<Position> = signal({ x: 0, y: 0 } as Position);
  private draggableItemInitialIndex = 0;

  protected dragStart([event, index, item]: [MouseEvent, number, NumberedTextItem]): void {
    this.draggableItemInitialIndex = index;

    this.dragStartPosition.set({ x: event.offsetX, y: event.offsetY });
    this.mousePosition.set({ x: event.pageX, y: event.pageY });

    this.draggableItem.set(item);
  }

  protected removeItem(number: number): void {
    this.items.update((items = []) => items.filter(item => item.number !== number));
  }

  protected setDraggableItemNumber(index: number): void {
    if (this.isDragging()) {
      this.draggableItem.update(item => {
        return { ...item!, number: index + TEMP_INDEX_FIX };
      });
    }
  }

  @HostListener('mousemove', ['$event'])
  private mouseMove(event: MouseEvent): void {
    if (this.isDragging()) {
      this.mousePosition.set({ x: event.pageX, y: event.pageY });
    }
  }

  @HostListener('mouseleave')
  @HostListener('document:mouseup')
  private dragEnd(): void {
    if (this.isDragging()) {
      this.items.update(items => {
        items[this.draggableItemInitialIndex] = this.draggableItem()!;
        return this.normalizeItemsList(items);
      });

      this.draggableItem.set(null);
    }
  }

  @HostListener('selectstart', ['$event'])
  private selectStart(event: Event): void {
    event.preventDefault();
  }

  private normalizeItemsList(items: NumberedTextItem[]): NumberedTextItem[] {
    return items
      .sort((a, b) => a.number - b.number)
      .map((item, index) => {
        return { ...item, number: index + 1 };
      });
  }
}
