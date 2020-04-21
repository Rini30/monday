import { Project } from './project';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value:Project[],searchBy:string,searchText:string): any
   {
     if (value ==null)
     {
    return value;
     }

     let resultarray=[];
     for (let item of value){
     console.log(item[searchBy]);
     console.log(searchText);

       if((item[searchBy])==(searchText)){
         resultarray.push(item);
       }
       return resultarray

     }
  }

}
