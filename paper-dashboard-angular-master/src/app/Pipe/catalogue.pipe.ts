import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'catalogue'
})
export class CataloguePipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
