import { Component, Input, OnInit, inject } from '@angular/core';
import { ProductRowResponse } from '../../models/product-row.interface';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-product-row',
  templateUrl: './product-row.component.html',
  styleUrl: './product-row.component.css'
})
export class ProductRowComponent implements OnInit {

  @Input() product!: ProductRowResponse;

  id!: string;
  nombreCategoria!: string;
  route: ActivatedRoute = inject(ActivatedRoute);

  nombre!: string;
  url!: string;
  descripcion!: string;
  tags!: string;
  precio!: number;
  categoria!: string;
  descuento!: number;

  product!: ProductAllDetails;

  constructor(private router: Router, private service: ProductService) {
    this.nombreCategoria = this.route.snapshot.params['nombreCategoria'];
  }

  ngOnInit(): void {
    this.service.productDetails(this.id).subscribe
  }

  editar() {
    this.router.navigate([`admin/add/producto`], { queryParams: { edit: true, id: this.id } });
    this.service.productDetails(this.id).subscribe(resp => {
      this.product = resp;
      this.router.navigate([`/admin/categorias/${this.nombreCategoria.toLowerCase()}`]);
    });
  }


}

