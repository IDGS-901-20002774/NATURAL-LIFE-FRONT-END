import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environment/env';
import { EmpleadoI } from '../interfaces/empleado';
import { ResponseI } from '../interfaces/response';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmpleadoService {
  url = environment.url_base + "Empleado";

  constructor(private http:HttpClient) { }

  agregarEmpleado(form:EmpleadoI): Observable<ResponseI>{
    return this.http.post<ResponseI>(this.url, form);
  }

  mostarEmpleados():Observable<any>{
    return this.http.get<ResponseI>(this.url);
  }

  actualizarEmpleado(id:number, datos:EmpleadoI){
    let httpOptions = {
      headers: new HttpHeaders({
        'accept': 'text/plain',
        'Content-Type': 'application/json'
      })
    }
    return this.http.put(this.url + "/" + id, datos, httpOptions)
  }

  eliminarEmpleado(id:number){
    let httpOptions = {
      headers: new HttpHeaders({
        'accept': 'text/plain',
        'Content-Type': 'application/json'
      })
    }
    return this.http.delete(this.url + "/" + id, httpOptions)
  }
}
