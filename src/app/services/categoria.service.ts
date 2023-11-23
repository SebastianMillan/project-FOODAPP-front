import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CategoriaRowResponse } from '../models/categoria-row.interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategoriaService {

  constructor(private http: HttpClient) { }

  getCategorias(): Observable<CategoriaRowResponse[]>{
    return this.http.get<CategoriaRowResponse[]>(`http://localhost:8080/categoria/`, {
      headers: {
        'Authorization': `Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJjMGE4NDAwMS04YmZlLTE0YWQtODE4Yi1mZTY0YjU0ZjAwMDkiLCJpYXQiOjE3MDA3ODAxODUsImV4cCI6MTcwMDg2NjU4NX0._qPeji683ZQKT98gIWZU2CRml9Qxk7S7OjAzSrVFUDp5AZk68y8HaQH3Gwj4j3Ia8ULr9JDcC91pxG66CehSxQ`
      }
    });
  }

}
