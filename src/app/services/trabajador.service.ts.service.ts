import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { TrabajadorResponse } from "../models/Get-trabajador-list.interface";

@Injectable({
  providedIn: 'root'
})
export class TrabajadorServiceTsService {

  constructor(private http: HttpClient) { }

  getTrabajadoresList(numPage: number): Observable<TrabajadorResponse> {
    return this.http.get<TrabajadorResponse>('http://localhost:8080/trabajador/',
      {
        headers: {
          'Authorization': 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJhYzE5ZTAwMS04YmZiLTE5ZGEtODE4Yi1mYmVhNTJkMDAwMGMiLCJpYXQiOjE3MDA3Mzg1NDQsImV4cCI6MTcwMDgyNDk0NH0.93tbjHPxcjG3F-KtEqzgFlpa2s8zW2uWkRQs6p0gyvxhrAcAw387bNRwSZUluIIp4blwZVHzlfMzMxyY0-ErHg'
        }
      });
  }
}
