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

}
