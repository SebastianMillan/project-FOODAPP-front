import { Component, OnInit } from '@angular/core';
import { AccountService } from '../../services/account.service';
import { Router } from '@angular/router';
import { TrabajadorServiceTsService } from '../../services/trabajador.service.ts.service';
import { Trabajador } from '../../models/Get-trabajador.interface';
import { debug } from 'console';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrl: './login-page.component.css'
})

export class LoginPageComponent implements OnInit {

  username = '';
  password = '';
  rol: string[] = [];
  trabajo!: string;
  trabajador!: Trabajador;
  id = '';
  puesto = '';


  constructor(private accountService: AccountService, private router: Router, private trabajadorService: TrabajadorServiceTsService) { }

  ngOnInit(): void {
    let token = localStorage.getItem('token');

    if (token != null) {
      this.router.navigateByUrl('/home');
    }
  }

  login() {
    this.accountService.loginAccount(this.username, this.password).subscribe(resp => {
      localStorage.setItem('account_id', resp.id)
      localStorage.setItem('token', resp.token)
      this.rol = resp.roles;
      this.id = resp.id;

      this.puesto = this.getPuesto();
      debugger
      console.log(this.puesto);
      console.log(this.rol);


      console.log(this.rol);
      if (this.rol.includes('ADMIN')) {

        this.router.navigateByUrl('admin/cliente');

      } else if (this.rol.includes('CLIENTE')) {

        this.router.navigateByUrl('/cliente/home');

      } else if (this.rol.includes('TRABAJADOR')) {
        if (this.puesto == 'COCINERO') {
          this.router.navigateByUrl('cocinero/pedidos');
        }
      } else {
        this.router.navigateByUrl('/admin/trabajador');
      }
    })
  }

  goToRegister() {
    this.router.navigateByUrl('/register');
  }

  getPuesto() {
    this.trabajadorService.getTrabajadorPuesto(this.id).subscribe(resp => {
      this.trabajo = resp.puesto;
    })
    return this.trabajo;
  }
}
