import { Pipe, PipeTransform } from '@angular/core';
import { Article } from 'app/Model/Article';

@Pipe({
  name: 'liste'
})
export class ListePipe implements PipeTransform {

  transform(Article:Article[],recherche :string):Article[]  {
    if(!Article||!recherche)
    {
      return Article; 
    }
    return Client.filter(Client=>Client.Login.toLowerCase().indexOf(recherche.toLowerCase())!==-1 || Client.Nom.toLowerCase().indexOf(recherche.toLowerCase())!==-1);
  }

}
