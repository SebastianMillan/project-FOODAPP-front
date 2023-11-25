import { Component, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-admin-vertical-product-list',
  templateUrl: './admin-vertical-product-list.component.html',
  styleUrl: './admin-vertical-product-list.component.css'
})
export class AdminVerticalProductListComponent {

  nombreCategoria!: string;
  route: ActivatedRoute = inject(ActivatedRoute);

  constructor(private router: Router) {
    this.nombreCategoria = this.route.snapshot.params['nombreCategoria'];
  }

  addProduct() {
    this.router.navigate([`admin/add/producto`])
    }
}
