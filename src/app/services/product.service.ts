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
        'Authorization': `Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJjMGE4MDFhNi04YmY4LTE0YWQtODE4Yi1mODg1YzI3OTAwMGMiLCJpYXQiOjE3MDA2ODE2MDIsImV4cCI6MTcwMDc2ODAwMn0.mRdVOBPW7IdYanA6Egz8qrw2KgK2I50aSalNcKD-5bhIz-IcHK4Z6ejCHlNp0Al56P-9iDAvzk0DvMiGxbsDkg`
      }
    })
  }
}
