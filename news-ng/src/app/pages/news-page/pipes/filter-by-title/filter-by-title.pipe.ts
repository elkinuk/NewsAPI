import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterByTitle'
})

export class FilterByTitlePipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return args ? value.filter(el => !!(el.title.toLowerCase().indexOf(args.toLowerCase()) + 1)) : value;
  }
}
