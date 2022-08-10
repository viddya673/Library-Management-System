import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Issue } from '../models/issue';
import { Books } from '../models/books';

@Injectable({
  providedIn: 'root'
})
export class IssuesService {

  private url1 = "http://localhost:8080/api/issues/user";
  private url2 = "http://localhost:8080/api/book/return";
  private url3 = "http://localhost:8080/api/overdues/user";


  constructor(private http: HttpClient) { }

  getIssues(uid: number): Observable<Issue[]>{
    return this.http.get<Issue[]>(`${this.url1}/${uid}`);
  }

  returnBook(iid: number, issues: Issue[]):Observable<Object>{
    return this.http.put(`${this.url2}/${iid}`, issues);
  }

  userOverdues(uid: number):Observable<Issue[]>{
    return this.http.get<Issue[]>(`${this.url3}/${uid}`);
  }

}
