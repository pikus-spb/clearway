import {
  ChangeDetectionStrategy,
  Component,
  effect,
  inject,
  linkedSignal,
  signal,
} from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs';
import { DocumentApiService } from '../../../../main/services/document-api.service';
import { SortArrayPipe } from '../../../../shared/pipes/sort-array.pipe';
import { DocumentPage } from '../../../../shared/types/document';
import { DocumentPageComponent } from '../document-page/document-page.component';

@Component({
  selector: 'clw-annotation-list',
  imports: [DocumentPageComponent, SortArrayPipe],
  templateUrl: './document.component.html',
  styleUrl: './document.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DocumentComponent {
  private route = inject(ActivatedRoute);
  protected doc = linkedSignal(toSignal(this.route.data.pipe(map(data => data['doc']))));
  private titleService = inject(Title);
  protected hasChanges = signal(false);
  private documentApiService = inject(DocumentApiService);

  constructor() {
    effect(() => {
      this.titleService.setTitle(`"${this.doc()?.name}" - Annotations`);
    });
  }

  protected changePage(index: number, page?: DocumentPage) {
    this.doc.update(doc => {
      doc.pages[index] = page;
      return doc;
    });
    this.hasChanges.set(true);
  }

  protected saveDocument(): void {
    this.documentApiService.saveDocument(this.doc());
  }
}
