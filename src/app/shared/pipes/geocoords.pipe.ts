import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'geocoords',
})
export class GeocoordsPipe implements PipeTransform {
  transform(value: string, ...args: string[]): unknown {
    console.log(value);
    console.log(args);

    if (value) {
      const coords = value.split(',');

      const url = `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3289.6621391248427!2d${coords[1]}!3d${coords[0]}!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xeaca5356332092d6!2zMzTCsDI3JzM4LjYiUyA1OMKwMzMnNTkuMSJX!5e0!3m2!1ses-419!2sar!4v1649160682520!5m2!1ses-419!2sar`;
      return url;
    }
  }
}
