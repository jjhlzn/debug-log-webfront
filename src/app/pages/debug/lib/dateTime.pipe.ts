import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dateTime'
})
export class DateTimePipe implements PipeTransform {
  transform(value: any, args: any[] = null) : string {
    return '2016-11-01T00:00:00';
  }
}
