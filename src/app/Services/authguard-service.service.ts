import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, map, Observable } from 'rxjs';
import { LoginModel } from '../Models/LoginModel';
import { StdService } from './StudentService';

const baseUrl = 'https://localhost:44368/SQL_UserManagement/api';
const loginUser = '/Authentication';
@Injectable({
  providedIn: 'root'
})
export class AuthguardServiceService {
  private userSubject: BehaviorSubject<LoginModel | null>;
  public user: Observable<LoginModel | null>;

  constructor(private studentservice: StdService, private http: HttpClient) {
    this.userSubject = new BehaviorSubject(JSON.parse(localStorage.getItem('user')!));
    this.user = this.userSubject.asObservable();
  }
  // gettoken(){  
  //   return !!localStorage.getItem("SeesionUser");  
  //   } 

  public get userValue() {
    return localStorage.getItem('user');
  }

  login(login: LoginModel): Observable<any> {
    debugger;
    //return this.studentservice.login(login)
    return this.http.post<LoginModel>(baseUrl + loginUser, login)
      .pipe(map(user => {

        debugger;
        // store user details and jwt token in local storage to keep user logged in between page refreshes
        localStorage.setItem('user', JSON.stringify(user));
        this.userSubject.next(user);
        return user;
      }

      ))
      ;
  }

  // login(username: string, password: string): boolean {
  //   debugger;
  //   if (username == username && password == password) {
  //     localStorage.setItem('currentUser', "loggedin");
  //     return true;
  //   }
  //   return false;
  // }
  logout() {
    localStorage.removeItem('user');
  }
  public get loggedIn(): boolean {
    return (localStorage.getItem('user') !== null);
  }
}
