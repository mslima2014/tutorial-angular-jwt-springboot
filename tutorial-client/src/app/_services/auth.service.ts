import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

import { JwtResponse } from './../_models/auth/jwt-response';
import { LoginInfo } from './../_models/auth/login-info';
import { SignUpInfo } from './../_models/auth/sign-up-info';

const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private signinUrl = 'http://localhost:8080/api/auth/signin';
  private signupUrl = 'http://localhost:8080/api/auth/signup';

  constructor(private http: HttpClient) { }

  attemptAuth(credentials: LoginInfo): Observable<JwtResponse> {
      return this.http.post<JwtResponse>(this.signinUrl, credentials, httpOptions);
  }

  signUp(info: SignUpInfo): Observable<string> {
      return this.http.post<string>(this.signupUrl, info, httpOptions);
  }
}
