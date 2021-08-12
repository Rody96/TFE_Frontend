import { Injectable } from '@angular/core';
import { HttpClient,  HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { TokenStorageService } from './token-storage.service';

const AUTH_API = 'https://rodrigue-projects.site/api/auth/';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http : HttpClient,
              private tokenStorage: TokenStorageService
              ) { }

  loggedIn(){
    return !!this.tokenStorage.getToken();
  }

  signin(email: string, password: string): Observable<any> {
    return this.http.post(AUTH_API + 'signin', { 
      "mail": email,
      "password": password
    }, httpOptions);
  }

  signup(email: string, password: string, firstName:string, lastName: string): Observable<any> {
    return this.http.post(AUTH_API + 'signup', { 
      "mail": email,
      "password": password,
      "firstName": firstName,
      "lastName": lastName,
      "roles": ["user"]
    }, httpOptions);
  }
}
