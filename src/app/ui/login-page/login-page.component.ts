import { Component } from '@angular/core';
import { AccountService } from '../../services/account.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrl: './login-page.component.css'
})
export class LoginPageComponent {

  username = '';
  password = '';

  constructor(private accountService: AccountService, private router: Router){}
  
  login() {
    this.accountService.loginAccount(this.username, this.password).subscribe(resp => {
      localStorage.setItem('account_id',resp.id)
      localStorage.setItem('token', resp.token); 
      this.router.navigateByUrl('/home');
    })
  }
  goToRegister() {
    this.router.navigateByUrl('/register');
  }
}
