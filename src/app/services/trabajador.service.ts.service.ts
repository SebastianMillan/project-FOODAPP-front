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
          'Authorization': 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJhYzE5ZTAwMS04YzAwLTEyYTUtODE4Yy0wMDY1NjhjMDAwMGMiLCJpYXQiOjE3MDA4MTM3MzEsImV4cCI6MTcwMDkwMDEzMX0.8IRH-RE4qGQePwisxU-eik5tEpH-M4ke0T8xdCqVJKS8JAaeYGRMp6O0tNJ6Gbe-8w0MYxFO7yFHrcrccBAjSA'
        }
      });
  }
}
