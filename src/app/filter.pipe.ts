import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter' 
})
export class FilterPipe implements PipeTransform {

  transform(ninjas: any, filterString: string, propName: string): any[] {
    // Check if search term is undefined
    if (filterString === undefined)
      return ninjas;


    // return updated ninjas array
    return ninjas.filter(function(ninja) {
      return ninja.name.toLowerCase().includes(filterString.toLowerCase()); 
    })
  }

}
