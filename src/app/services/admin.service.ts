import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ClientDetailResponse } from '../models/client-detail.interface';
import { environment } from '../../environment/environment';
import { ClientCardResponse} from '../models/client-card.interface';
import { LoggedUserDetailResponse } from '../models/logged-user-detail.interface';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private http: HttpClient) { }

  getClientWithOrders(id: string): Observable<ClientDetailResponse>{
    return this.http.get<ClientDetailResponse>(`${environment.apiBaseUrl}/admin/client/${id}`, {
      headers: {
        'Authorization': `Bearer ${localStorage.getItem('token')}`
      }
    });
  }

  getListClient(): Observable<ClientCardResponse[]>{
    return this.http.get<ClientCardResponse[]>(`${environment.apiBaseUrl}/admin/client/`, {
      headers: {
        'Authorization': `Bearer ${localStorage.getItem('token')}`
      }
    })
  }

  getLoggedUser(): Observable<ClientDetailResponse>{
    return this.http.get<ClientDetailResponse>(`${environment.apiBaseUrl}/profile`, {
      headers: {
        'Authorization': `Bearer ${localStorage.getItem('token')}`
      }
    })
  }
}
