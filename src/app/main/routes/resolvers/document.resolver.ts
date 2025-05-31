import { inject, Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve } from '@angular/router';
import { Observable } from 'rxjs';
import { Document } from '../../../shared/types/document';
import { DocumentApiService } from '../../services/document-api.service';

@Injectable({
  providedIn: 'root',
})
export class DocumentResolver implements Resolve<Document> {
  private documentApiService = inject(DocumentApiService);

  resolve(route: ActivatedRouteSnapshot): Observable<Document> {
    const documentId = route.params?.['id'];
    return this.documentApiService.loadDocument(documentId);
  }
}
