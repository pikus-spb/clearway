import { ChangeDetectionStrategy, Component, input, InputSignal } from '@angular/core';
import { ZoomableImageDirective } from '../../../../shared/directives/zoomable-image.directive';
import { ClearwayDocumentPage } from '../../../../shared/types/clearway-document';
import { PageAnnotationsComponent } from '../page-annotations/page-annotations.component';

@Component({
  selector: 'clw-document-page',
  imports: [PageAnnotationsComponent, ZoomableImageDirective],
  templateUrl: './document-page.component.html',
  styleUrl: './document-page.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DocumentPageComponent {
  public page: InputSignal<ClearwayDocumentPage> = input.required();
}
