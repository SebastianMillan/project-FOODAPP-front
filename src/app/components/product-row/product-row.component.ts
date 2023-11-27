import { Component, Input, OnInit, inject } from '@angular/core';
import { ProductRowResponse } from '../../models/product-row.interface';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-product-row',
  templateUrl: './product-row.component.html',
  styleUrl: './product-row.component.css'
})
export class ProductRowComponent {

  @Input() product!: ProductRowResponse;

  id!: string;
  nombreCategoria!: string;
  route: ActivatedRoute = inject(ActivatedRoute);

  nombre!: string;
  url!: string;
  descripcion!: string;
  tags: string[] = [];
  precio!: number;
  categoria!: string;
  descuento!: number;


  constructor(private router: Router) {
    this.nombreCategoria = this.route.snapshot.params['nombreCategoria'];
  }

  editar(id: string) {
    this.router.navigate([`admin/edit/producto/${id}`])
    console.log(id);
  }

}

