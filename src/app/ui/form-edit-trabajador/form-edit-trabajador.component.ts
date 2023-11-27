import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TrabajadorServiceTsService } from '../../services/trabajador.service.ts.service';

@Component({
  selector: 'app-form-edit-trabajador',
  templateUrl: './form-edit-trabajador.component.html',
  styleUrl: './form-edit-trabajador.component.css'
})
export class FormEditTrabajadorComponent implements OnInit {

  id!: string;
  nombre!: string;
  email!: string;
  telefono!: string;
  username!: string;
  password!: string;
  puesto!: string;
  fechaNacimiento!: string;

  nombreError: string = '';
  emailError: string = '';
  fechaError: string = '';
  puestoError: string = '';

  route: ActivatedRoute = inject(ActivatedRoute);

  constructor(private router: Router, private trabajadorService: TrabajadorServiceTsService) {
    this.id = this.route.snapshot.params['id'];
  }

  ngOnInit(): void {
    this.trabajadorService.getTrabajador(this.id).subscribe(resp => {
      this.nombre = resp.nombre;
      this.email = resp.email;
      this.telefono = resp.telefono;
      this.username = resp.username;
      this.password = resp.password;
      this.puesto = resp.puesto;
      this.fechaNacimiento = resp.fechaNacimiento;
    })
  }

  editar() {

    let hayErrores = false;
    if (this.nombre === '') {
      this.nombreError = 'El campo es obligatorio';
    }

    if (this.email === '') {
      this.emailError = 'El campo es obligatorio';
      hayErrores = true;
    }

    if (this.fechaNacimiento === '') {
      this.fechaError = 'El campo es obligatorio';
      hayErrores = true;
    }

    if (this.puesto === '') {
      this.puestoError = 'El campo es obligatorio';
    }

    if (hayErrores) {
      return;
    }
    this.trabajadorService.editTrabajador(this.nombre, this.email, this.telefono, this.puesto, this.fechaNacimiento, this.id).subscribe(resp => {
      window.location.href = 'http://localhost:4200/admin/trabajador';
    })
  }

}
