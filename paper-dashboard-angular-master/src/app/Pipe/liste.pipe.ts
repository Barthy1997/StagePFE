import { Pipe, PipeTransform } from '@angular/core';
import { Article } from 'app/Model/Article';

@Pipe({
  name: 'liste'
})
export class ListePipe implements PipeTransform {

  transform(Article:Article[],filter:number):Article[]  {
    if(!Article||!filter)
    {
      return Article; 
    }
    return Article.filter(Client=>Client.CL_No1==filter||Client.CL_No2==filter ||Client.CL_No3==filter);
  }

}
