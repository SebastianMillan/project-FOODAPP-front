import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ProductRowResponse } from '../models/product-row.interface';
import { environment } from '../../environment/environment';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private http: HttpClient) { }

  getProdctCategory(nombreCategoria: string): Observable<ProductRowResponse[]> {
    return this.http.get<ProductRowResponse[]>(`${environment.apiBaseUrl}/trabajador/producto/${nombreCategoria}`,
      {
        headers: {
          'Authorization': `Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJhYzFjZTAwMS04YzAwLTFhZTUtODE4Yy0wMDViNjY1NDAwMGMiLCJpYXQiOjE3MDA4MTMwNTgsImV4cCI6MTcwMDg5OTQ1OH0.EWCk_zeD0IQWnG-qYqwXX64ZZ9jOaeBAt7ZDA0iFS4eHU6FrmpOv0aSShOuKyWowoOl_O0lOGd07jkeFCGz7LA`
        }
      });
  }
}
