import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { OrderCocinero, OrderListCocineroResponse } from '../models/order-list-cocinero.interface';
import { environment } from '../../environment/environment';
import { PedidoDetailResponse } from '../models/PedidoDetails.interface';

@Injectable({
  providedIn: 'root'
})
export class PedidoService {

  constructor(private http: HttpClient) { }

  getCocineroOrders(page: number): Observable<OrderListCocineroResponse>{
    return this.http.get<OrderListCocineroResponse>(`${environment.apiBaseUrl}/cocinero/pedido?page=${page}`, {
      headers: {
        'Authorization': `Bearer ${localStorage.getItem('token')}`
      }
    })
  }

  changeEstadoPedidoCocinero(estadoPedido: string, id:string): Observable<OrderCocinero>{
    return this.http.put<OrderCocinero>(`${environment.apiBaseUrl}/cocinero/pedido/${id}`, {
      estadoPedido: estadoPedido
    },{
      headers: {
        'Authorization': `Bearer ${localStorage.getItem('token')}`
      }
    })
  }

  getPedidoDetails(id: string): Observable<PedidoDetailResponse>{
    return this.http.get<PedidoDetailResponse>(`${environment.apiBaseUrl}/pedido/${id}`, {
      headers: {
        'Authorization': `Bearer ${localStorage.getItem('token')}`
      }
    })
  }

  addProductoToCarrito(idPedido: string): Observable<PedidoDetailResponse>{
    return this.http.post<PedidoDetailResponse>(`${environment.apiBaseUrl}/pedido/addProducto/${idPedido}`,{}, {
      headers: {
        'Authorization': `Bearer ${localStorage.getItem('token')}`
      }
    })
  }
}
