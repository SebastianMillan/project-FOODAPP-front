import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UserLoginResponse } from '../models/user-login.interface';
import { environment } from '../../environment/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  constructor(private http: HttpClient) { }

  loginAccount(username: string, password: string): Observable<UserLoginResponse>{
    return this.http.post<UserLoginResponse>(`${environment.apiBaseUrl}/auth/login}`, {
      username: username,
      password: password
    }, {
      headers: {
        'Content-Type': 'application/json',        
      }
    })
  }
}
