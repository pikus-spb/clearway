import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ClearwayDocument } from '../../shared/types/ClearwayDocument';

@Injectable({
  providedIn: 'root',
})
export class DocumentApiService {
  private http = inject(HttpClient);

  getDocument(id: string): Observable<ClearwayDocument> {
    // Here always return 1.json but shoudl be real end-point
    return this.http.get<ClearwayDocument>(`/api/1.json`);
  }
}
