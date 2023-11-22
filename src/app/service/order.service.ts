import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ListOrderAdminResponse } from '../models/list-order-admin.interface';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor(private http: HttpClient) { }

  getOrderListAdmin(): Observable<ListOrderAdminResponse[]>{
    return this.http.get<ListOrderAdminResponse[]>(`http://localhost:8080/trabajador/admin`,
    {
      headers: {
        'accept': 'application/json',
        'Authorization': `Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJhYzE5YzAwMS04YmY4LTExMGQtODE4Yi1mODUxODhlMzAwMGQiLCJpYXQiOjE3MDA2NzgxNzksImV4cCI6MTcwMDc2NDU3OH0.LLXBEFzAMW_frmMs_5qorsK7BonjXmmJIzqHYHeulA2Z8tbfuZ3dWUocE0z7j3bIadtFdl0Uw64fkMSDKAuIvg`
      }
    }
    );
  }

}
