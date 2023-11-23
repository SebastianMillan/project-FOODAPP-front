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
          'Authorization': 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJjMGE4MDAwYi04YmZjLTFjN2QtODE4Yi1mY2VjYjk3NjAwMGMiLCJpYXQiOjE3MDA3NTU0NjAsImV4cCI6MTcwMDg0MTg2MH0.6t8oFxFefAkQRWgx6SMCti8kf_pg7yzToXqjNRTCjpmn81lROFMRwivbc1xq_Gm-7WLz65kaqoRpbF5-GgEc4w'
        }
      });
  }
}
