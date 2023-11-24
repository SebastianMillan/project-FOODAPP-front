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
    return this.http.get<CategoriaRowResponse[]>(`http://localhost:8080/admin/categoria/`, {
      headers: {
        'Authorization': `Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJhYzE5OTAwMS04YzAwLTE3Y2MtODE4Yy0wMGE3ZDZlOTAwMDkiLCJpYXQiOjE3MDA4MTgzMDEsImV4cCI6MTcwMDkwNDcwMX0.zuaIBzReIWJrI5uMp3uY-U5XepgWPjNgJKcccW12xT7a_84zYZM2AVi9Ar0dLk9nA6v28G4qE9VnlbmLiZ3tyw`
      }
    });
  }

}
