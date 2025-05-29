import { inject, Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve } from '@angular/router';
import { Observable } from 'rxjs';
import { ClearwayDocument } from '../../../shared/types/clearway-document';
import { DocumentApiService } from '../../services/document-api.service';

@Injectable({
  providedIn: 'root',
})
export class DocumentResolver implements Resolve<ClearwayDocument> {
  private documentApiService = inject(DocumentApiService);

  resolve(route: ActivatedRouteSnapshot): Observable<ClearwayDocument> {
    const documentId = route.params?.['id'];
    return this.documentApiService.loadDocument(documentId);
  }
}
