import { ChangeDetectionStrategy, Component, model } from '@angular/core';
import { ZoomableImageDirective } from '../../../../shared/directives/zoomable-image.directive';
import {
  ClearwayDocumentAnnotation,
  ClearwayDocumentPage,
} from '../../../../shared/types/clearway-document';
import { AnnotationsComponent } from '../annotations/annotations.component';

@Component({
  selector: 'clw-document-page',
  imports: [AnnotationsComponent, ZoomableImageDirective],
  templateUrl: './document-page.component.html',
  styleUrl: './document-page.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DocumentPageComponent {
  public page = model<ClearwayDocumentPage>();

  protected updateAnnotations(annotations: ClearwayDocumentAnnotation[]): void {
    this.page.update(page => {
      return Object.assign({}, page, { annotations });
    });
  }
}
