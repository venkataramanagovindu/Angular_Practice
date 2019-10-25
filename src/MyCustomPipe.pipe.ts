import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'MyCustomPipe'
})
export class MyCustomPipePipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return null;
  }

}
