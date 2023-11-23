import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ProductCardResponse } from '../models/product-card.interface';
import { environment } from '../../environment/environment';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) { }

  getMonthProduct(): Observable<ProductCardResponse> {
    return this.http.get<ProductCardResponse>(`${environment.apiBaseUrl}/product/month_product`, {
      headers: {
        'Authorization': `Bearer ${localStorage.getItem('token')}`
      }
    })
  }

  getNewsProducts(): Observable<ProductCardResponse[]>{
    return this.http.get<ProductCardResponse[]>(`${environment.apiBaseUrl}/product/new_product`, {
      headers: {
        'Authorization': `Bearer ${localStorage.getItem('token')}`
      }
    })
  }

  getOfferProducts(): Observable<ProductCardResponse[]>{
    return this.http.get<ProductCardResponse[]>(`${environment.apiBaseUrl}/product/offer_product`, {
      headers: {
        'Authorization': `Bearer ${localStorage.getItem('token')}`
      }
    })
  }
}
