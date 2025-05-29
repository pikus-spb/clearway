import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ClearwayDocument } from '../../shared/types/clearway-document';

@Injectable({
  providedIn: 'root',
})
export class DocumentApiService {
  private http = inject(HttpClient);

  public loadDocument(id: string): Observable<ClearwayDocument> {
    // Here always return 1.json but should be a real end-point
    return this.http.get<ClearwayDocument>(`/api/1.json`);
  }

  public saveDocument(doc: ClearwayDocument) {
    console.log(doc);
  }
}
