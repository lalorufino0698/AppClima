import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ClimaService {
  url= 'http://api.openweathermap.org/data/2.5/weather?&appid=';
  key = '3dba3b245ff0a46dc12c63e86002e482';

  constructor( private http: HttpClient) { }

  getClima(ciudad : string): Observable<any>{
   return this.http.get(this.url + this.key + '&q=' + ciudad);
  }
}
