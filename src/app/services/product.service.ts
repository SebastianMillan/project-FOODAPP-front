import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ProductCardResponse } from '../models/product-card.interface';
import { environment } from '../../environment/environment';
import { ProductAllDetails } from '../models/new-product.interface';


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

  getNewsProducts(): Observable<ProductCardResponse[]> {
    return this.http.get<ProductCardResponse[]>(`${environment.apiBaseUrl}/product/new_product`, {
      headers: {
        'Authorization': `Bearer ${localStorage.getItem('token')}`
      }
    })
  }

  getOfferProducts(): Observable<ProductCardResponse[]> {
    return this.http.get<ProductCardResponse[]>(`${environment.apiBaseUrl}/product/offer_product`, {
      headers: {
        'Authorization': `Bearer ${localStorage.getItem('token')}`
      }
    })
  }

  addProduct(nombre: string, descripcion: string, tags: string[] = [], precio: number, categoria: string, imagen: string): Observable<ProductAllDetails> {
    return this.http.post<ProductAllDetails>(`${environment.apiBaseUrl}/admin/add/producto`, {
      nombre: nombre,
      descripcion: descripcion,
      tags: tags,
      precio: precio,
      categoria: categoria,
      imagen: imagen,
    }, {
      headers: {
        'Authorization': `Bearer ${localStorage.getItem('token')}`
      }
    });
  }

  deleteProduct(id: string) {
    return this.http.delete(`${environment.apiBaseUrl}/admin/delete/producto/${id}`,
      {
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('token')}`
        }
      });
  }


  productDetails(id: string): Observable<ProductAllDetails> {
    return this.http.get<ProductAllDetails>(`${environment.apiBaseUrl}/admin/product/details/${id}`, {

      headers: {
        'Authorization': `Bearer ${localStorage.getItem('token')}`
      }
    })
  }


  editProduct(nombre: string, descripcion: string, tags: string[] = [], precio: number, categoria: string, imagen: string, id: string): Observable<ProductAllDetails> {
    return this.http.put<ProductAllDetails>(`${environment.apiBaseUrl}/admin/edit/product/${id}`, {
      nombre: nombre,
      descripcion: descripcion,
      tags: tags,
      precio: precio,
      categoria: categoria,
      imagen: imagen,
    }, {
      headers: {
        'Authorization': `Bearer ${localStorage.getItem('token')}`
      }
    });
  }

}
