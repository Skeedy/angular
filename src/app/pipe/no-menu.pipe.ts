import { Pipe, PipeTransform } from '@angular/core';
import {Assoc} from '../class/assoc';

@Pipe({
  name: 'noMenu'
})
export class NoMenuPipe implements PipeTransform {

  transform(value: Assoc[], args?: any): any {

    return value.filter( (assoc: Assoc) => {
      return !assoc.forMenu;
    });
  }

}
