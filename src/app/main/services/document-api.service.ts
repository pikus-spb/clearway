import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Document } from '../../shared/types/document';

@Injectable({
  providedIn: 'root',
})
export class DocumentApiService {
  private http = inject(HttpClient);

  public loadDocument(id: string): Observable<Document> {
    // Here always return 1.json but should be a real end-point
    return this.http.get<Document>(`/api/1.json`);
  }

  public saveDocument(doc: Document) {
    console.log(doc);
  }
}
