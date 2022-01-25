import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'convert'
})
export class ConvertPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    if(!value){ return ''}
    return value*1.6;
  }

}

//custom pipelines first we add path to app.module.ts then
//second add to pipe name to declarable  