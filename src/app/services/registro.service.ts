import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ClienteI } from '../interfaces/Cliente';
import { resposeI } from '../interfaces/response.interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RegistroService {
  url_base:string ="https://localhost:7224/api/";
  constructor(private http:HttpClient) { }


  
  agregarCliente(form:ClienteI): Observable<resposeI>{
    let direccion=this.url_base+"Cliente";
    return this.http.post<resposeI>(direccion,form);
  }
}
