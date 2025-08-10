import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http : HttpClient) { }

  private url = 'http://127.0.0.1:8000';

    login(username: string, password: string): Observable<any> {
    return this.http.post(`${this.url}/api/login`, {
      username: username,
      password: password
    }, 
  );
  }
}
