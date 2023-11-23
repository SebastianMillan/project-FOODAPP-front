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
        'Authorization': `Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJjMGE4NDAwMS04YmZiLTE1NmItODE4Yi1mYjY1Y2I3MDAwMGMiLCJpYXQiOjE3MDA3Mjk4NjksImV4cCI6MTcwMDgxNjI2OX0.jO3sSOdKoesFtVzdmTHAXl-vFSYZFheiHWSHTFh0wvGkVofeozbv7OcbfacnXAwWPRGh7I5rFeh-U0Pod7-gAw`
      }
    })
  }

  getNewsProducts(): Observable<ProductCardResponse[]>{
    return this.http.get<ProductCardResponse[]>(`${environment.apiBaseUrl}/product/new_product`, {
      headers: {
        'Authorization': `Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJjMGE4NDAwMS04YmZiLTE1NmItODE4Yi1mYjY1Y2I3MDAwMGMiLCJpYXQiOjE3MDA3Mjk4NjksImV4cCI6MTcwMDgxNjI2OX0.jO3sSOdKoesFtVzdmTHAXl-vFSYZFheiHWSHTFh0wvGkVofeozbv7OcbfacnXAwWPRGh7I5rFeh-U0Pod7-gAw`
      }
    })
  }

  getOfferProducts(): Observable<ProductCardResponse[]>{
    return this.http.get<ProductCardResponse[]>(`${environment.apiBaseUrl}/product/offer_product`, {
      headers: {
        'Authorization': `Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJjMGE4NDAwMS04YmZiLTE1NmItODE4Yi1mYjY1Y2I3MDAwMGMiLCJpYXQiOjE3MDA3Mjk4NjksImV4cCI6MTcwMDgxNjI2OX0.jO3sSOdKoesFtVzdmTHAXl-vFSYZFheiHWSHTFh0wvGkVofeozbv7OcbfacnXAwWPRGh7I5rFeh-U0Pod7-gAw`
      }
    })
  }
}
