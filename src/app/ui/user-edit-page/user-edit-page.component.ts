import { Component, OnInit } from '@angular/core';
import { ClientService } from '../../services/client.service';
import { Router } from '@angular/router';
import { AdminService } from '../../services/admin.service';

@Component({
  selector: 'app-user-edit-page',
  templateUrl: './user-edit-page.component.html',
  styleUrl: './user-edit-page.component.css'
})
export class UserEditPageComponent implements OnInit {

  nombre = '';
  email = '';
  telefono = '';
  avatar = '';
  direccion = '';
  codPostal = '';
  poblacion = '';

  constructor(private clientService: ClientService, private router: Router, private adminService: AdminService) { }

  ngOnInit(): void {
    this.adminService.getLoggedUser().subscribe(resp => {
      this.nombre = resp.nombre;
      this.email = resp.email;
      this.avatar = resp.avatar;
      this.direccion = resp.direccion;
      this.codPostal = resp.codPostal;
      this.poblacion = resp.poblacion;
    })
  }

  editLoggedUser() {
    const clientEditado = {
      nombre: this.nombre,
      email: this.email,
      telefono: this.telefono,
      avatar: this.avatar,
      direccion: this.direccion,
      codPostal: this.codPostal,
      poblacion: this.poblacion
    }
    this.clientService.editLoggedUser(clientEditado).subscribe(resp => {
      this.router.navigateByUrl('/login');
    });
  }
}
