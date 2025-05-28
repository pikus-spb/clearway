import { ChangeDetectionStrategy, Component, effect, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs';
import { SortPagesPipe } from '../../../../shared/pipes/sort-pages.pipe';
import { DocumentPageComponent } from '../document-page/document-page.component';

@Component({
  selector: 'clw-annotations',
  imports: [DocumentPageComponent, SortPagesPipe],
  templateUrl: './document-annotations.component.html',
  styleUrl: './document-annotations.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DocumentAnnotationsComponent {
  private route = inject(ActivatedRoute);
  protected doc = toSignal(this.route.data.pipe(map(data => data['doc'])));
  private titleService = inject(Title);

  constructor() {
    effect(() => {
      this.titleService.setTitle(`"${this.doc()?.name}" - Annotations`);
    });
  }
}
