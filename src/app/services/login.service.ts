import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../models/user';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private url='http://localhost:8080/api/user/login'
  private url2 = "http://localhost:8080/api/user/"

  constructor(private http: HttpClient) { }
  public loginUserService(email: string, password: string):Observable<any>{
    const data ={
      email: email,
      password: password
    }
    return this.http.post<any>(`${this.url}`, data);
  }

  getUserByEmail(email: String): Observable<User>{
    return this.http.get<User>(`${this.url2}/${email}`);
  }
}
