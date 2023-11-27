import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { TrabajadorResponse } from "../models/Get-trabajador-list.interface";
import { NewTrabajadorResponse } from "../models/Add-Trabajador.interface";
import { environment } from "../../environment/environment";

@Injectable({
  providedIn: 'root'
})
export class TrabajadorServiceTsService {

  constructor(private http: HttpClient) { }

  getTrabajadoresList(numPage: number): Observable<TrabajadorResponse> {
    return this.http.get<TrabajadorResponse>(`${environment.apiBaseUrl}/admin/trabajador`,
      {
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('token')}`
        }
      });
  }
  newTrabajador(nombre: string, email: string, telefono: string, username: string, password: string, puesto: string, fechaNacimiento: string): Observable<NewTrabajadorResponse> {
    return this.http.post<NewTrabajadorResponse>(`${environment.apiBaseUrl}/admin/trabajador`, {
      nombre: nombre,
      email: email,
      telefono: telefono,
      username: username,
      password: password,
      puesto: puesto,
      fechaNacimiento: fechaNacimiento
    }, {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${localStorage.getItem('token')}`,
      }
    });
  }

  deleteTrabajador(id: string): Observable<TrabajadorResponse> {
    return this.http.delete<TrabajadorResponse>(`${environment.apiBaseUrl}/admin/delete/trabajador/${id}`,
      {
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('token')}`
        }
      });
  }

}


