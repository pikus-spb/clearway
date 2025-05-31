import { ChangeDetectionStrategy, Component, input, output } from '@angular/core';
import { NumberedTextItem } from '../../../types/item';

@Component({
  selector: 'clw-list-item',
  imports: [],
  templateUrl: './list-item.component.html',
  styleUrl: './list-item.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ListItemComponent {
  public item = input.required<NumberedTextItem>();
  public index = input.required<number>();
  public itemRemoved = output<number>();
  public startDragging = output<[MouseEvent, number, NumberedTextItem]>();

  protected mouseDown(event: MouseEvent): void {
    this.startDragging.emit([event, this.index(), this.item()]);
  }
}
