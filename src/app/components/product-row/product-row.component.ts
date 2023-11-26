import { Component, Input, OnInit, inject } from '@angular/core';
import { ProductRowResponse } from '../../models/product-row.interface';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-product-row',
  templateUrl: './product-row.component.html',
  styleUrl: './product-row.component.css'
})
export class ProductRowComponent{

  @Input() product!: ProductRowResponse;
  
  id!: string;
  nombreCategoria!: string;
  route: ActivatedRoute = inject(ActivatedRoute);

  constructor(private router: Router, private service: ProductService) {
    this.nombreCategoria = this.route.snapshot.params['nombreCategoria'];
  }

  editar() {
    this.router.navigate([`admin/add/producto`, { queryParams: { edit: true, id: this.id } }])
    }

}

