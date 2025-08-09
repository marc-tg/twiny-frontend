import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  constructor(private http: HttpClient) { }
  private url = 'https://newsapi.org/v2/top-headlines?country=us&apiKey=';
  
  private apiKey = "0f619a92fc224759be43069aaa973ee5";

  getNews(): Observable<any> {
        return this.http.get(`${this.url + this.apiKey}`); ;
  }
}
