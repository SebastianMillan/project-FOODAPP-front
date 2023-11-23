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
          'Authorization': 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJhYzE5ZTAwMS04YmZjLTEzNmYtODE4Yi1mYzMzZDExYjAwMGMiLCJpYXQiOjE3MDA3NDMzNDAsImV4cCI6MTcwMDgyOTc0MH0.RJhNNVApL5FW8xrFB_PgDZ_ZxkMbzfpgIYAChqSm9sYGLUo9k9v2sOVw3cBvWJiFSYiqELg7rr765_KEqI9A5Q'
        }
      });
  }
}
