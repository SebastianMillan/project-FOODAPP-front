import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-admin-vertical-product-list',
  templateUrl: './admin-vertical-product-list.component.html',
  styleUrl: './admin-vertical-product-list.component.css'
})
export class AdminVerticalProductListComponent {

  nombreCategoria!: string;
  route: ActivatedRoute = inject(ActivatedRoute);

  constructor() {
    this.nombreCategoria = this.route.snapshot.params['nombreCategoria'];
  }
}
