import { Component } from '@angular/core';
import { TrabajadorServiceTsService } from '../../services/trabajador.service.ts.service';
import { Router } from 'express';

@Component({
  selector: 'app-form-trabajador',
  templateUrl: './form-trabajador.component.html',
  styleUrl: './form-trabajador.component.css'
})
export class FormTrabajadorComponent {

  nombre = '';
  email = '';
  telefobo = '';
  username = '';
  password = '';
  puesto = '';
  fechaNacimiento = '';

  constructor(private trabajadorService: TrabajadorServiceTsService) { }
  altaTrabajador() {
    this.trabajadorService.newTrabajador(this.nombre, this.email, this.telefobo, this.username, this.password, this.puesto, this.fechaNacimiento).subscribe(resp => {
      window.location.href = 'http://localhost:4200/admin/trabajador'
    })
  }
}

