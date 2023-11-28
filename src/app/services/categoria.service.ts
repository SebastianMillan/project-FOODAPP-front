import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CategoriaRowResponse } from '../models/categoria-row.interface';
import { Observable } from 'rxjs';
import { environment } from '../../environment/environment';
import { NuevaCategoriaResponse } from '../models/new-categoria.interface';
import { CategoryProductResponse } from '../models/CategoriaConProductos.interface';
import { ProductRowResponse } from '../models/product-row.interface';

@Injectable({
  providedIn: 'root'
})
export class CategoriaService {

  constructor(private http: HttpClient) { }

  getCategorias(): Observable<CategoriaRowResponse[]> {
    return this.http.get<CategoriaRowResponse[]>(`${environment.apiBaseUrl}/admin/categoria/`, {
      headers: {
        'Authorization': `Bearer ${localStorage.getItem('token')}`
      }
    });
  }

  addCategoria(nombreCategoria: string): Observable<NuevaCategoriaResponse> {
    return this.http.post<NuevaCategoriaResponse>(`${environment.apiBaseUrl}/admin/add/categoria`, {
      nombre: nombreCategoria
    }, {
      headers: {
        'Authorization': `Bearer ${localStorage.getItem('token')}`
      }
    });
  }

  getProdctCategory(nombreCategoria: string): Observable<ProductRowResponse[]> {
    return this.http.get<ProductRowResponse[]>(`${environment.apiBaseUrl}/admin/producto/${nombreCategoria}`,
      {
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('token')}`
        }
      });
  }

  getCategoryWithProducts(): Observable<CategoryProductResponse> {
    return this.http.get<CategoryProductResponse>(`${environment.apiBaseUrl}/admin/menu2`,
      {
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('token')}`
        }
      });
  }

}
