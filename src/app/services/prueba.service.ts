import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PruebaService {

  constructor(private http: HttpClient) { }

private url = 'http://127.0.0.1:8000';



  getData(): Observable<any> {
    console.log('Llamando a la API desde el servicio...');
    return this.http.get(this.url + '/api/users');
  };
}
