import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environment/env';
import { ResponseI } from '../interfaces/response';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  urlUsuarioCliente = environment.url_base + "Cliente"
  urlUsuarioEmpleado = environment.url_base + "Empleado"

  constructor(private http:HttpClient) { }

  mostarClientes():Observable<any>{
    return this.http.get<ResponseI>(this.urlUsuarioCliente);
  }
  mostarEmpleados():Observable<any>{
    return this.http.get<ResponseI>(this.urlUsuarioEmpleado);
  }
}
