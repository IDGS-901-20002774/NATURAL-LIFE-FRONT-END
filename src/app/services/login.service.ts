import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ResponseI } from '../interfaces/response';
import { environment } from 'src/environment/env';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  url = environment.url_base + "Login";

  constructor(private http:HttpClient) { }

  loginbyemail(correo: string, contrasenia: string): Observable<ResponseI>{
    const form = {
      correo: correo,
      contrasenia: contrasenia,
    };
    return this.http.post<ResponseI>(this.url, form);
  }
}
