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
  confirmPassword = '';
  puesto: any;
  fechaNacimiento = '';

  nombreError: string = '';
  emailError: string = '';
  usernameError: string = '';
  passwordError: string = '';
  confirmPasswordError: string = '';
  puestoError: string = '';
  fechaError: string = '';
  errorMessage: string = '';

  constructor(private trabajadorService: TrabajadorServiceTsService) { }
  altaTrabajador() {

    this.nombreError = '';
    this.emailError = '';
    this.usernameError = '';
    this.passwordError = '';
    this.confirmPasswordError = '';
    this.puestoError = '';
    this.fechaError = '';

    let hayErrores = false;

    if (this.nombre === '') {
      this.nombreError = 'El campo es obligatorio';
      hayErrores = true;
    }

    if (this.email === '') {
      this.emailError = 'El campo es obligatorio';
      hayErrores = true;
    }

    if (this.username === '') {
      this.usernameError = 'El campo es obligatorio';
      hayErrores = true;
    }

    if (this.password === '') {
      this.passwordError = 'El campo es obligatorio';
      hayErrores = true;
    }

    if (this.password !== this.confirmPassword) {
      this.confirmPasswordError = 'Las contraseñas no coinciden';
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

    this.trabajadorService.newTrabajador(this.nombre, this.email, this.telefono, this.username, this.password, this.puesto, this.fechaNacimiento)
      .subscribe(
        (resp) => {
          console.log(this.nombre, this.email);
          window.location.href = 'http://localhost:4200/admin/trabajador/form';
        },
        (error) => {
          if (error && error.error && error.error.subErrors) {
            error.error.subErrors.forEach((subError: any) => {
              if (subError.field === 'email' && subError.message === 'El correo tiene que tener una extensión valida') {
                this.emailError = 'El correo tiene que tener una extensión válida';
              }
            });
          }
          if (error && error.message && error.message.includes('Unique index or primary key violation')) {
            this.usernameError = 'El nombre de usuario ya está en uso. Por favor, elija otro nombre de usuario.';
            console.log(error.message);
          } else {
            this.errorMessage = '';
          }
        }
      );
  }
}

