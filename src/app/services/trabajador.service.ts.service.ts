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
          'Authorization': 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJjMGE4MDAwYi04YmZkLTFlMjYtODE4Yi1mZDhmMzUxYTAwMGMiLCJpYXQiOjE3MDA3NjYxMDYsImV4cCI6MTcwMDg1MjUwNn0.bCR3CNtZJg2XtI7zlqas-xrpDCJRm4l8QBSl7YUdcwZeZ_izBENpw6UXgI2cno5Vv6N70gKJWf1Jy4SUhY1Dqw'
        }
      });
  }
}
