import { Injectable } from '@angular/core';
import { loginI } from '../interfaces/Login.interface';
import { resposeI } from '../interfaces/response.interface';
import {HttpClient,HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  url_base:string ="https://localhost:7224/api/";
  constructor(private http:HttpClient) { }

  loginbyemail(correo: string, contrasenia: string): Observable<resposeI>{
    let direccion=this.url_base+"Login";
    const form = {
      correo: correo,
      contrasenia: contrasenia,
    };
    return this.http.post<resposeI>(direccion,form);
  }
}
