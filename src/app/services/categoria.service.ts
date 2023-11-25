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

  addCategoria(nombre: string): Observable<NuevaCategoriaResponse>{
    return this.http.post<NuevaCategoriaResponse>(`${environment.apiBaseUrl}/admin/add/categoria/`,{
      nombre: nombre
    },{
      headers: {
        'Authorization': `Bearer ${localStorage.getItem('token')}`
      }
    });
  }

}
