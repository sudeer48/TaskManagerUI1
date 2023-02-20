import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthguardServiceService {

  constructor() { }
  // gettoken(){  
  //   return !!localStorage.getItem("SeesionUser");  
  //   } 

  login(username: string, password: string): boolean {
    debugger;
    if (username == username && password == password) {
      localStorage.setItem('currentUser', "loggedin");
      return true;
    }
    return false;
  }
  logout() {
    localStorage.removeItem('currentUser');
  }
  public get loggedIn(): boolean {
    return (localStorage.getItem('currentUser') !== null);
  }
}
