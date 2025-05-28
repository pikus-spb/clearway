import { Component, input, InputSignal } from '@angular/core';
import { ClearwayDocumentAnnotation } from '../../../../shared/types/clearway-document';

@Component({
  selector: 'clw-page-annotations',
  imports: [],
  templateUrl: './page-annotations.component.html',
  styleUrl: './page-annotations.component.scss',
})
export class PageAnnotationsComponent {
  public annotations: InputSignal<ClearwayDocumentAnnotation[]> = input(
    [] as ClearwayDocumentAnnotation[],
  );
}
