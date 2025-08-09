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

  getALike(idUser: string, idPost: string): Observable<any> {
    return this.http.get(`${this.url}/api/likes/${idUser}/${idPost}`);
  }

  hasLike(idUser: any, idPost: any): Observable<any> {
    // Implement this method if needed to check if a user has liked a post
    return this.http.get(`${this.url}/api/likes/has/${idUser}/${idPost}`);
  }

}
