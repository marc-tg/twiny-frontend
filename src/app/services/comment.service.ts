import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommentService {

  constructor(private http: HttpClient) { }

  private url = 'http://127.0.0.1:8000';

    getPostComments(idPost:any): Observable<any> {
    return this.http.get(`${this.url}/api/comments/post/${idPost}`);
  }

}
