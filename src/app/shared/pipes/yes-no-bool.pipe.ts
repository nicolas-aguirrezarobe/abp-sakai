import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'yesNoBool',
})
export class YesNoBoolPipe implements PipeTransform {
  transform(value: any, ...args: any[]): any {
    return value ? 'Yes' : 'No';
  }
}
