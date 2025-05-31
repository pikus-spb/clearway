import { ChangeDetectionStrategy, Component, model } from '@angular/core';
import { ZoomableImageDirective } from '../../../../shared/directives/zoomable-image.directive';
import { DocumentPage } from '../../../../shared/types/document';
import { NumberedTextItem } from '../../../../shared/types/item';
import { AnnotationListComponent } from '../../../annotation-list/annotation-list/annotation-list.component';

@Component({
  selector: 'clw-document-page',
  imports: [ZoomableImageDirective, AnnotationListComponent],
  templateUrl: './document-page.component.html',
  styleUrl: './document-page.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DocumentPageComponent {
  public page = model<DocumentPage>();

  protected updateAnnotations(annotations: NumberedTextItem[]): void {
    this.page.update(page => {
      return Object.assign({}, page, { annotations });
    });
  }
}
