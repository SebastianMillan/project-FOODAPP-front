import { Component } from '@angular/core';
import { AccountService } from '../../services/account.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrl: './register-page.component.css'
})
export class RegisterPageComponent {
  username = '';
  password = '';
  verifyPassword = '';
  avatar = '';
  nombre = '';
  email = '';

  constructor(private accountService: AccountService, private router: Router) { }

  sendRegistro() {
    this.accountService.registerClient(this.username, this.password, this.verifyPassword, this.avatar, this.nombre, this.email).subscribe(resp => {
      this.accountService.loginAccount(this.username, this.password).subscribe(respok => {
        localStorage.setItem('account_id', respok.id)
        localStorage.setItem('token', respok.token);
        this.router.navigateByUrl('/cliente/home');
      })
    })
  }
}
