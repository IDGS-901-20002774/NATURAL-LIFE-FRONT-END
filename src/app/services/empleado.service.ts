import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { resposeI } from '../interfaces/response.interface';
import { EmpleadoI } from '../interfaces/Empleado';
@Injectable({
  providedIn: 'root'
})
export class EmpleadoService {
  url_base:string ="https://localhost:7224/api/";
  constructor(private http:HttpClient) { }


  
  agregarEmpleado(form:EmpleadoI): Observable<resposeI>{
    let direccion=this.url_base+"Empleado";
    return this.http.post<resposeI>(direccion,form);
  }



}
