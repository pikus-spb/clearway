import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sortArray',
})
export class SortArrayPipe<T> implements PipeTransform {
  transform(pages: T[], fieldName: keyof T): T[] {
    return pages.sort((a, b) => {
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
