import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RecuperarPostsService {

  private baseUrl = "https://jsonplaceholder.typicode.com/";

  constructor(private http: HttpClient) { }

  recuperarPosts(): Observable<any>{
    const finalLink = this.baseUrl + "posts";
    return this.http.get<any[]>(finalLink);
  }
  recuperarPost(id: number): Observable<any>{
    const finalLink = this.baseUrl + "posts/" + id;
    return this.http.get<any>(finalLink);
  }
}
