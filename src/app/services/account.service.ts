import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UserLoginResponse } from '../models/user-login.interface';
import { environment } from '../../environment/environment';
import { Observable, ObservableInput } from 'rxjs';
import { observableToBeFn } from 'rxjs/internal/testing/TestScheduler';
import { RegisterClientResponse } from '../models/register-client.interface';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  constructor(private http: HttpClient) { }

  loginAccount(username: string, password: string): Observable<UserLoginResponse>{
    return this.http.post<UserLoginResponse>(`${environment.apiBaseUrl}/auth/login`, {
      username: username,
      password: password
    }, {
      headers: {
        'Content-Type': 'application/json',        
      }
    })
  }

  registerClient(username:string, password:string, verifyPassword:string, avatar:string, nombre:string, email:string): Observable<RegisterClientResponse>{
    return this.http.post<RegisterClientResponse>(`${environment.apiBaseUrl}/auth/register`, {
      username: username,
      password: password,
      verifyPassword: verifyPassword,
      avatar: avatar,
      nombre: nombre,
      email:email
    }, {
      headers: {
        'Content-Type': 'application/json',        
      }
    })
  }
}
