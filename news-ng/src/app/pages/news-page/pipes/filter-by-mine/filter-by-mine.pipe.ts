import { Pipe, PipeTransform } from '@angular/core';
import { LandingService } from 'src/app/services/landing/landing.service';

@Pipe({
  name: 'filterByMine'
})
export class FilterByMinePipe implements PipeTransform {

  constructor(private landingService: LandingService){}

  transform(value: any, args?: any): any {
    return args ? value.filter(el => el.creator == this.landingService.getLoginValue()) : value;
  }

}
