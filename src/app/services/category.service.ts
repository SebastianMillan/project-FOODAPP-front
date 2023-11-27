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
    return this.http.get<ProductRowResponse[]>(`${environment.apiBaseUrl}/admin/producto/${nombreCategoria}`,
      {
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('token')}`
        }
      });
  }
}
