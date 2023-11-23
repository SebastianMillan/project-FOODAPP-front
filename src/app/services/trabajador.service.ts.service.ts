import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { TrabajadorResponse } from "../models/Get-trabajador-list.interface";

@Injectable({
  providedIn: 'root'
})
export class TrabajadorServiceTsService {

  constructor(private http: HttpClient) { }

  getTrabajadoresList(): Observable<TrabajadorResponse[]> {
    return this.http.get<TrabajadorResponse[]>('http://localhost:8080/trabajador/',
      {
        headers: {
          'Authorization': 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJhYzE5ZTAwMS04YmZiLTE3ZTItODE4Yi1mYjI5MzE4ODAwMGIiLCJpYXQiOjE3MDA3MjU4ODIsImV4cCI6MTcwMDgxMjI4Mn0.or2eWumC22DNhIrx66xXUuqvVufhEjBGmpOLF_1-e7_jiPKF9rzEXlfqI6py47CzDDHFk7NgKZxRmwpSQ169fA'
        }
      });
  }
}
