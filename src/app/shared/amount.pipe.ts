import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'amount'
})
export class AmountPipe implements PipeTransform {

  transform(value: number, args?: any): string {
    if(value < 1000){
      return value.toString();
    }
    if(value < 100000){
      let newValue = value / 1000;
      return newValue + 'K';
    }
    if(value < 10000000){
      let newValue = value / 100000;
      return newValue + 'L';
    }
    if(value < 1000000000){
      let newValue = value / 10000000;
      return newValue + 'Cr';
    }
    return null;
  }

}
