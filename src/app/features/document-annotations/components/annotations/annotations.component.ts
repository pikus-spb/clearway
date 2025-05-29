import { Component, model, ModelSignal } from '@angular/core';
import { ClearwayDocumentAnnotation } from '../../../../shared/types/clearway-document';
import { AddAnnotationComponent } from '../add-annotation/add-annotation.component';

@Component({
  selector: 'clw-annotations',
  imports: [AddAnnotationComponent],
  templateUrl: './annotations.component.html',
  styleUrl: './annotations.component.scss',
})
export class AnnotationsComponent {
  public annotations: ModelSignal<ClearwayDocumentAnnotation[]> = model(
    [] as ClearwayDocumentAnnotation[],
  );

  protected addAnnotation(annotation: string): void {
    this.annotations.update((annotations = []) => [
      ...annotations,
      {
        number: annotations.length + 1,
        text: annotation,
      },
    ]);
  }

  protected removeAnnotation(number: number): void {
    this.annotations.update((annotations = []) =>
      annotations.filter(item => item.number !== number),
    );
  }
}
