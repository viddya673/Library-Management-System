import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../models/user';
import { Books } from '../models/books';
import { Issue } from '../models/issue';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private url1 = "http://localhost:8080/api/users";
  private url2 = "http://localhost:8080/api/create/user";
  private url3 = "http://localhost:8080/api/delete/user";
  private url4 = "http://localhost:8080/api/admin-update/password";
  private url5 = "http://localhost:8080/api/books";
  private url6 = "http://localhost:8080/api/remove/book";
  private url7 = "http://localhost:8080/api/add/book";
  private url8 = "http://localhost:8080/api/issue/book";
  private url9 = "http://localhost:8080/api/update/password";


  constructor(private http: HttpClient) { }

  getUsers(): Observable<User[]>{
    return this.http.get<User[]>(`${this.url1}`);
  }

  createUser(user: User): Observable<Object>{
    return this.http.post(`${this.url2}`, user);
  }

  deleteUser(uid: number): Observable<Object>{
    return this.http.put(`${this.url3}/${uid}`, uid);
  }

  updatePwdAdmin(uid: number, user: User):Observable<Object>{
    return this.http.put(`${this.url4}/${uid}`, user);
  }

  getUserById(uid: number): Observable<User>{
    return this.http.get<User>(`${this.url1}/${uid}`);
  }

  getBooks():Observable<Books[]>{
    return this.http.get<Books[]>(`${this.url5}`);
  }

  deleteBook(bid: number):Observable<Object>{
    return this.http.delete(`${this.url6}/${bid}`);
  }

  addBook(book: Books):Observable<Object>{
    return this.http.post(`${this.url7}`, book);
  }

  issueBook(uid: number, bid: number, issue: Issue):Observable<Object>{
    return this.http.post(`${this.url8}/${uid}/${bid}`, issue);
  }

  changePassword(uid: number, oldPassword: string, newPassword: String){
    const data ={
      newPassword: newPassword,
      oldPassword: oldPassword
    }
    return this.http.put(`${this.url9}/${uid}`, data);
  }

}
