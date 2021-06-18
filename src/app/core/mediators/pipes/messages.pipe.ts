import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'messages'
})
export class MessagesPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
