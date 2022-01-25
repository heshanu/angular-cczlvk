import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'convert'
})
export class ConvertPipe implements PipeTransform {

  transform(value: any,targetUnits:string): any {
    if(!value){ return '' }
      switch(targetUnits){
        case 'km':
          return value*1.6;break;
        case 'm':
          return value*1.6*1000;break;
        case 'cm':
          return value*1.6*1000*1000;break;
        default:
          throw new Error('Target unit isnot matches!');
      }

  }

}

//custom pipelines first we add path to app.module.ts then
//second add to pipe name to declarable  