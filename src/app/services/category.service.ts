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

  getProdctCategory(nombreCategoria: string): Observable<ProductRowResponse[]>{
    return this.http.get<ProductRowResponse[]>(`${environment.apiBaseUrl}/trabajador/producto/${nombreCategoria}`,
    {
      headers: {
        'Authorization': `Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJhYzE5YzAwMS04YmZkLTEyNjEtODE4Yi1mZDcyOTRjNTAwMGMiLCJpYXQiOjE3MDA3NjQyMzEsImV4cCI6MTcwMDg1MDYzMX0.to7ofmcDvDRsNqCbAxGh5KcWj9dtHnJKjGDRBruvX5CUyrx-7VNjaJU1yQ7uHX2R53MIKs9b1DciO-M4i-5bFA`
    }
  });
  }
}
