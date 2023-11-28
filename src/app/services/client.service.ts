import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ClientDetailResponse } from '../models/client-detail.interface';
import { environment } from '../../environment/environment';
import { EditLoggedUserResponse } from '../models/edit-logged-user.interface';

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  constructor(private http: HttpClient) { }

  editLoggedUser(userLogged: EditLoggedUserResponse): Observable<ClientDetailResponse>{
    return this.http.put<ClientDetailResponse>(`${environment.apiBaseUrl}/profile/edit`, userLogged, {
      headers: {
          'Authorization': `Bearer ${localStorage.getItem('token')}`
        }
    });
  }
}
