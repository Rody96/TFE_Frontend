import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http : HttpClient) { }

  public isAuthenticated() : Boolean {
    let userData = localStorage.getItem('userInfo')
    if(userData && JSON.parse(userData)){
      return true;
    }
    return false;
  }

  public setUserInfo(user){
    localStorage.setItem('userInfo', JSON.stringify(user));
  }

  createNewUser(email: string, password: string, firstName:string, lastName: string) {
    const apiURL = "https://rodrigue-projects.site/users/signup";
    const headers = { 'Content-Type': 'application/json' };
    const body = { 
      "mail": email,
      "password": password,
      "firstName": firstName,
      "lastName": lastName,
      "learningMode": false
    };
    return this.http.post(apiURL, body, { headers }).toPromise()
  }

  signInUser(email: string, password: string) {
    const apiURL = "https://rodrigue-projects.site/users/signin";
    const headers = { 'Content-Type': 'application/json' };
    const body = { 
      "mail": email,
      "password": password
    };
    return this.http.post(apiURL, body, { headers }).toPromise()
  }

  signOutUser() {
    const apiURL = "https://rodrigue-projects.site/users/logout";
    const headers = { 'Accept': 'application/json','Content-Type': 'application/json' };
    return this.http.get(apiURL, { headers }).toPromise()
  }
}
