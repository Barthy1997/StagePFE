import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ZoneService {

  private api='http://localhost:3000/Compte'
  token = localStorage.getItem('token');
  constructor(private http:HttpClient) { }

  
}
