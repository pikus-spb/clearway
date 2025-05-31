import { ChangeDetectionStrategy, Component, HostListener, input, output } from '@angular/core';

@Component({
  selector: 'clw-observer-item',
  imports: [],
  templateUrl: './observer-item.component.html',
  styleUrl: './observer-item.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ObserverItemComponent {
  public active = input.required<boolean>();
  public hovered = output<void>();

  @HostListener('mouseover')
  private mouseOver(): void {
    if (this.active()) {
      this.hovered.emit();
    }
  }
}
