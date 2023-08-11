import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environment/env';
import { ClienteI } from '../interfaces/cliente';
import { ResponseI } from '../interfaces/response';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RegistroService {
  url = environment.url_base + "Cliente";

  constructor(private http:HttpClient) { }
  
  agregarCliente(form:ClienteI): Observable<ResponseI>{
    return this.http.post<ResponseI>(this.url,form);
  }
}
