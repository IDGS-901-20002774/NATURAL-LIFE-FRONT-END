import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ResponseI } from '../interfaces/response';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  url_base:string ="https://localhost:7224/api/";
  constructor(private http:HttpClient) { }

  loginbyemail(correo: string, contrasenia: string): Observable<ResponseI>{
    let direccion=this.url_base+"Login";
    const form = {
      correo: correo,
      contrasenia: contrasenia,
    };
    return this.http.post<ResponseI>(direccion, form);
  }
}
