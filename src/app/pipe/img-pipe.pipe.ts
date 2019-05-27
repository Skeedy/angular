import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'imgurl'
})
export class ImgPipePipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return 'http://admin.ojbento.fr/' + value;
  }

}
