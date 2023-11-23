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
          'Authorization': 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJjMGE4MDAwYi04YmZkLTE3NzAtODE4Yi1mZDI3OWUxMjAwMGMiLCJpYXQiOjE3MDA3NTkzMTgsImV4cCI6MTcwMDg0NTcxOH0.4UBm7Z6nxnZ8Tm1_Y-D8mXgG4_aCV2LVc5nl1S1imOTtdlH88tZldtwa8-HMHCTbGYUEC7k2V-ZkrD7ycdsIcQ'
        }
      });
  }
}
