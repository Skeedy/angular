import { Pipe, PipeTransform } from '@angular/core';
import { Type } from '@angular/core';

@Pipe({
  name: 'typeProduct'
})
export class TypeProductPipe implements PipeTransform {

  transform(type: string): string {

    let category: string;

    switch (type) {
      case 'Maki':

    }
  }

}
