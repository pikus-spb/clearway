import { ChangeDetectionStrategy, Component, input, linkedSignal } from '@angular/core';
import { NumberedTextItem } from '../../../types/numbered-text-item';
import { Position } from '../../../types/position';

@Component({
  selector: 'clw-draggable-item',
  imports: [],
  templateUrl: './draggable-item.component.html',
  styleUrl: './draggable-item.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DraggableItemComponent {
  public item = input.required<NumberedTextItem | null>();
  public dragOffset = input.required<Position>();
  public mousePosition = input.required<Position>();

  protected getMouseX = linkedSignal(() => {
    return this.mousePosition().x - this.dragOffset().x;
  });

  protected getMouseY = linkedSignal(() => {
    return this.mousePosition().y - this.dragOffset().y;
  });
}
