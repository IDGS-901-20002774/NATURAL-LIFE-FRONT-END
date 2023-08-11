import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environment/env';
import { MateriaPrimaI } from '../interfaces/materia-prima';
import { Observable } from 'rxjs';
import { ResponseI } from '../interfaces/response';

@Injectable({
  providedIn: 'root'
})
export class MateriaPrimaService {
  url = environment.url_base + "MateriaPrima";

  constructor(private http:HttpClient) { }
  
  agregarMateriaPrima(datos:MateriaPrimaI): Observable<ResponseI>{
    let httpOptions = {
      headers: new HttpHeaders({
        'accept': 'text/plain',
        'Content-Type': 'application/json'
      })
    }
    return this.http.post<ResponseI>(this.url, datos, httpOptions);
  }

  mostarMateriaPrimaes():Observable<any>{
    return this.http.get<ResponseI>(this.url);
  }

  actualizarMateriaPrima(id:number, datos:MateriaPrimaI){
    let httpOptions = {
      headers: new HttpHeaders({
        'accept': 'text/plain',
        'Content-Type': 'application/json'
      })
    }
    return this.http.put(this.url + "/" + id, datos, httpOptions)
  }

  eliminarMateriaPrima(id:number){   
    return this.http.delete(this.url + "/" + id)
  }
}
