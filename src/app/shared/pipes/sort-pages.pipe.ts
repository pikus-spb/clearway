import { Pipe, PipeTransform } from '@angular/core';
import { ClearwayDocumentPage } from '../types/clearway-document';

@Pipe({
  name: 'sortPages',
})
export class SortPagesPipe implements PipeTransform {
  transform(
    pages: ClearwayDocumentPage[],
    fieldName: keyof ClearwayDocumentPage = 'number',
  ): ClearwayDocumentPage[] {
    return [...pages].sort((a, b) => {
      if (typeof a[fieldName] === 'string') {
        return a[fieldName].localeCompare(b[fieldName] as string);
      }
      if (typeof a[fieldName] === 'number') {
        return a[fieldName] - (b[fieldName] as number);
      }

      return 0;
    });
  }
}
