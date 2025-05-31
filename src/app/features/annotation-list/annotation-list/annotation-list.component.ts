import { ChangeDetectionStrategy, Component, model, ModelSignal } from '@angular/core';
import { SortableListComponent } from '../../../shared/components/sortable-list/sortable-list/sortable-list.component';
import { NumberedTextItem } from '../../../shared/types/item';
import { AddAnnotationComponent } from '../add-annotation/add-annotation.component';

@Component({
  selector: 'clw-annotation-list',
  imports: [SortableListComponent, AddAnnotationComponent],
  templateUrl: './annotation-list.component.html',
  styleUrl: './annotation-list.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AnnotationListComponent {
  public annotations: ModelSignal<NumberedTextItem[]> = model([] as NumberedTextItem[]);

  protected addAnnotation(annotation: string): void {
    this.annotations.update((annotations = []) => [
      ...annotations,
      {
        number: annotations.length + 1,
        text: annotation,
      },
    ]);
  }

  protected updateAnnotations(annotations: NumberedTextItem[]): void {
    this.annotations.set(annotations);
  }
}
