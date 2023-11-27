import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ListOrderAdminResponse } from '../models/list-order-admin.interface';
import { environment } from '../../environment/environment';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor(private http: HttpClient) { }

  getOrderListAdmin(): Observable<ListOrderAdminResponse[]>{
    return this.http.get<ListOrderAdminResponse[]>(`${environment}/admin/pedido`,
    {
      headers: {
        'Authorization': `Bearer ${localStorage.getItem('token')}`
      }
    }
    );
  }

}
