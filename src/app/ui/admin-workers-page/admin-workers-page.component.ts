import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-admin-workers-page',
  templateUrl: './admin-workers-page.component.html',
  styleUrl: './admin-workers-page.component.css'
})
export class AdminWorkersPageComponent {

  constructor(private route: Router) { }

  irAformulario() {
    this.route.navigate([`admin/trabajador/form`]);
  }
}
