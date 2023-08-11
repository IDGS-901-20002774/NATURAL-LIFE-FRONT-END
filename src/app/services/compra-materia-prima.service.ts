import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environment/env';
import { CompraMateriaPrimaI } from '../interfaces/compra-materia-prima';
import { ResponseI } from '../interfaces/response';
import { DetalleCompraMateriaPrimaI } from '../interfaces/detalle-compra-materia';

@Injectable({
  providedIn: 'root'
})
export class CompraMateriaPrimaService {
  urlCompraMateria = environment.url_base + "CompraMateria";
  urlDetalleCompraMateria = environment.url_base + "DetalleCompraMateria";
  urlProveedor = environment.url_base + "Proveedor";
  urlMateriaPrima = environment.url_base + "MateriaPrima";

  constructor(private http:HttpClient) { }
  
  agregarCompra(datos:CompraMateriaPrimaI): Observable<ResponseI>{
    let httpOptions = {
      headers: new HttpHeaders({
        'accept': 'text/plain',
        'Content-Type': 'application/json'
      })
    }
    return this.http.post<ResponseI>(this.urlCompraMateria, datos, httpOptions);
  }

  agregarDetalleCompra(datos:DetalleCompraMateriaPrimaI): Observable<ResponseI>{
    let httpOptions = {
      headers: new HttpHeaders({
        'accept': 'text/plain',
        'Content-Type': 'application/json'
      })
    }
    return this.http.post<ResponseI>(this.urlDetalleCompraMateria, datos, httpOptions);
  }

  mostarProveedores():Observable<any>{
    return this.http.get<ResponseI>(this.urlProveedor);
  }

  mostarMateriaPrimas():Observable<any>{
    return this.http.get<Response>(this.urlMateriaPrima);
  }
}
