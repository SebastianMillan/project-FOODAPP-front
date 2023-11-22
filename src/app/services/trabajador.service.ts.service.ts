import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { TrabajadorResponse } from "../models/Get-trabajador-list.interface";

@Injectable({
  providedIn: 'root'
})
export class TrabajadorServiceTsService {

  constructor(private http: HttpClient) { }

  getTrabajadoresList(): Observable<TrabajadorResponse> {
    return this.http.get<TrabajadorResponse>('http://8080/trabajador/',
      {
        headers: {
          'Authorization': 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJjMGE4MDAwYi04YmY4LTEwMmUtODE4Yi1mODYxOGMyZTAwMGIiLCJpYXQiOjE3MDA2NzkyMzEsImV4cCI6MTcwMDc2NTYzMX0.uBEy89uJNpODR9IW6EZZfI3bDjjOur23rv42G82CxGjX2_zGxtMiegYanDWnLwXLTZpsjdu-gYnrC86kQn6LBw'
        }
      });
  }
}
