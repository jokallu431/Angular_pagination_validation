import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sort'
})
export class SortPipe implements PipeTransform {

  transform(value: Array<any>, args: any[]): any {
     const sortField= args[0];
     const sortDirection=args[1];

     let multipiler = 1;

     if(sortDirection==='desc'){
      multipiler= -1 ;
     }

     value.sort((a:any,b:any)=>{
      
      if(a[sortField]<b[sortField]){
        return -1*multipiler;
      }
      else if(a[sortField]>b[sortField]){
        return 1*multipiler;
      }else{
        return 0;
      }
    });
    
    return value;

  }

}
