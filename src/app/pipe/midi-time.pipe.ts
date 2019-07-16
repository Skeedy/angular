import { Pipe, PipeTransform } from '@angular/core';
import {Time} from '../class/time';

@Pipe({
  name: 'midiTime'
})
export class MidiTimePipe implements PipeTransform {

  transform(value: Time[], args?: any): any {

    return value.filter( (time: Time) => {
      return time.midi;
    });
  }
}
