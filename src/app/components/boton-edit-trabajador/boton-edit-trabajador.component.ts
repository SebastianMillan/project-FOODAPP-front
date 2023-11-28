import { Component, Input, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-boton-edit-trabajador',
  templateUrl: './boton-edit-trabajador.component.html',
  styleUrl: './boton-edit-trabajador.component.css'
})
export class BotonEditTrabajadorComponent {

  id!: string;
  route: ActivatedRoute = inject(ActivatedRoute);

  constructor(private router: Router) {
    this.id = this.route.snapshot.params['id'];
  }

  irAforumulario() {
    this.router.navigate([`admin/trabajador/edit/form/${this.id}`]);
  }
}
