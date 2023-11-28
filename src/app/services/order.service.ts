import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ListOrderAdminResponse } from '../models/list-order-admin.interface';
import { environment } from '../../environment/environment';
import { OrderDetailsResponse } from '../models/order-details.interface';

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

  getOrderDetails(): Observable<OrderDetailsResponse[]>{
    return this.http.get<OrderDetailsResponse[]>(`${environment.apiBaseUrl}/admin/pedido`,
    {
      headers: {
        'Authorization': `Bearer ${localStorage.getItem('token')}`
      }
    }
    )
  }

  getOrderId(id: string): Observable<OrderDetailsResponse>{
    return this.http.get<OrderDetailsResponse>(`${environment.apiBaseUrl}/admin/pedido/${id}`,
    {
      headers: {
        'Authorization': `Bearer ${localStorage.getItem('token')}`
      }
    }
    )
  }

}
