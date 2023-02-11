import { Injectable } from '@angular/core';
import * as moment from 'moment';

@Injectable({
  providedIn: 'root',
})
export class DateHelperService {
  stringToDate(date: Date): string {
    return `${date.getFullYear()}-${this.formatDigit(date.getMonth() + 1)}-${this.formatDigit(
      date.getDate()
    )}`;
  }

  isValidDate(date: any): boolean {
    return date && moment(date).isValid();
  }

  private formatDigit(number: number) {
    if (number.toString().length == 1) return '0' + number.toString();
    else return number.toString();
  }
}
