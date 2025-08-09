import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LikeService {

  constructor(private http: HttpClient) { }

  private url = 'http://127.0.0.1:8000';

  getLikes(): Observable<any> {
    return this.http.get(this.url + '/api/likes');
  }

getALike(id: string): Observable<any> {
  return this.http.get(`${this.url}/api/likes/${id}`);
}


}
