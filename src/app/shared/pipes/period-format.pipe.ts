import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'periodFormat',
})
export class PeriodFormatPipe implements PipeTransform {
  transform(value: string, ...args: unknown[]): unknown {
    if (value.toString().length === 4) {
      return value;
    } else if (value.toString().length === 6) {
      const last2 = value.toString().slice(-2);
      const first4 = value.toString().substring(0, 4);

      const period = last2 + '-' + first4;
      return period;
    }
    return null;
  }
}
