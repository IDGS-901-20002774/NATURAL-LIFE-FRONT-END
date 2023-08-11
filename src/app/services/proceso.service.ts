import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ProcesoI } from '../interfaces/proceso';
import { environment } from 'src/environment/env';

@Injectable({
  providedIn: 'root'
})
export class ProcesoService {
  url = environment.url_base + "Proceso";

  constructor(private http:HttpClient) { }

  agregarProceso(datos: ProcesoI): Observable<ProcesoI>{
    let httpOptions = {
      headers: new HttpHeaders({
        'accept': 'text/plain',
        'Content-Type': 'application/json'
      })
    }
    return this.http.post<ProcesoI>(this.url, datos, httpOptions);
  }

  mostrarProcesosActivos(): Observable<ProcesoI[]>{
    return this.http.get<ProcesoI[]>(this.url);
  }

  eliminarProceso(id:Number){
    return this.http.delete(this.url + "/" + id)
  }
}
