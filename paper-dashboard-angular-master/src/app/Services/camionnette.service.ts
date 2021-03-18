import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CamionnetteService {

  private api='http://localhost:3000/Camionnette'
  constructor(private http:HttpClient) { }

  getallCamionnette()
  {
    return this.http.get(this.api+'/all')
  }

  AjouterCamion(Camionnette:object)
  {
    return this.http.post(this.api+'/ajout',Camionnette);
  }
  
  deleteOne(id:number)
  {
    return this.http.delete(this.api+'/delete/'+id);
  }

  updateCamion(Camion:object)
  {
    return this.http.put(this.api+'/update',Camion)
  }

}
