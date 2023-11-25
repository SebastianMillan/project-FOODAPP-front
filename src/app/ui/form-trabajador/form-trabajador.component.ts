import { Component } from '@angular/core';
import { TrabajadorServiceTsService } from '../../services/trabajador.service.ts.service';


@Component({
  selector: 'app-form-trabajador',
  templateUrl: './form-trabajador.component.html',
  styleUrl: './form-trabajador.component.css'
})
export class FormTrabajadorComponent {

  nombre = '';
  email = '';
  telefono = '';
  username = '';
  password = '';
  puesto: any;
  fechaNacimiento = '';

  constructor(private trabajadorService: TrabajadorServiceTsService) { }
  altaTrabajador() {
    this.trabajadorService.newTrabajador(this.nombre, this.email, this.telefono, this.username, this.password, this.puesto, this.fechaNacimiento).subscribe(resp => {
      console.log(this.nombre, this.email);
      window.location.href = 'http://localhost:4200/admin/trabajador';
    })
  }
}

