import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ClientDetailResponse } from '../models/client-detail.interface';
import { environment } from '../../environment/environment';

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
}
