import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environment/env';
import { ProveedorI } from '../interfaces/proveedor';
import { ResponseI } from '../interfaces/response';

@Injectable({
  providedIn: 'root'
})
export class ProveedorService {
  url = environment.url_base + "Proveedor";

  constructor(private http:HttpClient) { }

  agregarProveedor(datos:ProveedorI): Observable<ResponseI>{
    let httpOptions = {
      headers: new HttpHeaders({
        'accept': 'text/plain',
        'Content-Type': 'application/json'
      })
    }
    return this.http.post<ResponseI>(this.url, datos, httpOptions);
  }

  mostarProveedores():Observable<any>{
    return this.http.get<ResponseI>(this.url);
  }

  actualizarProveedor(id:number, datos:ProveedorI){
    let httpOptions = {
      headers: new HttpHeaders({
        'accept': 'text/plain',
        'Content-Type': 'application/json'
      })
    }
    return this.http.put(this.url + "/" + id, datos, httpOptions)
  }

  eliminarProveedor(id:number){   
    return this.http.delete(this.url + "/" + id)
  }
}
