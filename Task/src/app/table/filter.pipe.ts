import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter',
})
export class FilterPipe implements PipeTransform {

  transform(items: any[], term: string): any[] {
    if (!items) {
      return [];
    }
    if (!term) {
      return items;
    }

    return items.filter(item => {
      return item.login.includes(term);
    });
}

}
