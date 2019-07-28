import { Pipe, PipeTransform } from '@angular/core';
import {Menu} from '../class/menu';

@Pipe({
  name: 'noMidiMenu'
})
export class NoMidiMenuPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return value.filter( (menu: Menu) => {
      return !menu.isMidi;
    });
  }

}
