import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { TrabajadorResponse } from "../models/Get-trabajador-list.interface";
import { NewTrabajadorResponse } from "../models/Add-Trabajador.interface";
import { environment } from "../../environment/environment";
import { Trabajador } from "../models/Get-trabajador.interface";
import { PuestoResponse } from "../models/PuestoTrabajador.interface";
import { TrabajadorLoggedResponse } from "../models/looged-trabajador.interface";

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

  editTrabajador(nombre: string, email: string, telefono: string, puesto: string, fechaNacimiento: string, id: string): Observable<Trabajador> {
    return this.http.put<Trabajador>(`${environment.apiBaseUrl}/admin/trabajador/${id}`, {
      nombre: nombre,
      email: email,
      telefono: telefono,
      puesto: puesto,
      fechaNacimiento: fechaNacimiento,
    }, {
      headers: {
        'Authorization': `Bearer ${localStorage.getItem('token')}`
      }
    });
  }

  getTrabajador(id: string): Observable<Trabajador> {
    return this.http.get<Trabajador>(`${environment.apiBaseUrl}/admin/trabajador/${id}`, {
      headers: {
        'Authorization': `Bearer ${localStorage.getItem('token')}`
      }
    })
  }

  getTrabajadorPuesto(id: string): Observable<PuestoResponse> {
    return this.http.get<PuestoResponse>(`${environment.apiBaseUrl}/trabajador/puesto/${id}`, {
      headers: {
        'Authorization': `Bearer ${localStorage.getItem('token')}`
      }
    })
  }

  getTrabajadoLogged(): Observable<TrabajadorLoggedResponse> {
    return this.http.get<TrabajadorLoggedResponse>(`${environment.apiBaseUrl}/trabajador/profile`, {
      headers: {
        'Authorization': `Bearer ${localStorage.getItem('token')}`
      }
    })
  }


}


