import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CategoriaRowResponse } from '../models/categoria-row.interface';
import { Observable } from 'rxjs';
import { environment } from '../../environment/environment';
import { NuevaCategoriaResponse } from '../models/new-categoria.interface';

@Injectable({
  providedIn: 'root'
})
export class CategoriaService {

  constructor(private http: HttpClient) { }

  getCategorias(): Observable<CategoriaRowResponse[]>{
    return this.http.get<CategoriaRowResponse[]>(`${environment.apiBaseUrl}/admin/categoria/`, {
      headers: {
        'Authorization': `Bearer ${localStorage.getItem('token')}`
      }
    });
  }

  addCategoria(nombreCategoria: String): Observable<NuevaCategoriaResponse>{
    return this.http.post<NuevaCategoriaResponse>(`${environment.apiBaseUrl}/admin/add/categoria`,{
      nombre: nombreCategoria
    },{
      headers: {
        'Authorization': `Bearer ${localStorage.getItem('token')}`
      }
    });
  }

  editCategoria(idCategoria: String, nuevoNombre: String): Observable<NuevaCategoriaResponse>{
    return this.http.put<NuevaCategoriaResponse>(`${environment.apiBaseUrl}/admin/edit/categoria/${idCategoria}`, {
      nombre: nuevoNombre
    },{
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${localStorage.getItem('token')}`
      }
    });
  }

  deleteCategoria(nombreCategoria: String): Observable<any> {
    return this.http.delete<any>(`${environment.apiBaseUrl}/admin/delete/categoria/${nombreCategoria}`, {
      headers: {
        'Authorization': `Bearer ${localStorage.getItem('token')}`
      }
    });
  }
}
