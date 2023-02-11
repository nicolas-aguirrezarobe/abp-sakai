import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class PeriodHelperService {
  numberToDate(period: number): Date {
    console.log(period);
    var periodType = this.getPeriodType(period);
    if (periodType == PeriodType.year) return new Date(period, 1);
    else
      return new Date(
        Number.parseInt(period.toString().substring(0, 4)),
        Number.parseInt((period - 1).toString().substring(5, 6))
      );
  }

  dateToNumber(period: Date, type: PeriodType): number {
    if (type == PeriodType.month)
      return Number.parseInt(`${period.getFullYear()}${this.formatMonth(period.getMonth() + 1)}`);
    else return period.getFullYear();
  }

  getPeriodType(period: number) {
    if (period.toString().length === 4) return PeriodType.year;
    else if (period.toString().length === 6) return PeriodType.month;
    else throw new Error('Wrong period format: ' + period);
  }

  periodToMonth(period: number) {
    const last2 = parseInt(period.toString().slice(-2));

    const date = new Date(2009, last2 - 1, 10); // 2009-11-10
    const month = date.toLocaleString('default', { month: 'long' });
    return month.substring(0, 3);
  }

  periodToMonthAndYear(period: number) {
    const last2 = parseInt(period.toString().slice(-2));
    const year = parseInt(period.toString().slice(0, 4));
    const date = new Date(year, last2 - 1, 10); // 2009-11-10
    const stringDate = this.capitalize(
      date.toLocaleString('default', { month: 'long', year: 'numeric' })
    );
    return stringDate;
  }

  private formatMonth(month: number): string {
    if (month.toString().length === 1) return '0' + month.toString();
    else return month.toString();
  }

  private capitalize(str: string) {
    const str2 = str.charAt(0).toUpperCase() + str.slice(1);
    return str2;
  }
}

export enum PeriodType {
  year,
  month,
}
