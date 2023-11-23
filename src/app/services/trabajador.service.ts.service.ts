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
          'Authorization': 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJhYzE5ZTAwMS04YmZiLTFmMTgtODE4Yi1mYjUxYWE1NTAwMGIiLCJpYXQiOjE3MDA3Mjg1MjEsImV4cCI6MTcwMDgxNDkyMX0.g29Sur0qmvLtknOkfFvANV0O1GKfEdTBSmjoSghMvlrLATXcqkZrVTqa2zQAP-QE0AEY4cWhVg3mgPcGWYhRqg'
        }
      });
  }
}
