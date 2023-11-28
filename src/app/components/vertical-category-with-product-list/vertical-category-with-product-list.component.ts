import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductRowResponse } from '../../models/product-row.interface';
import { CategoriaService } from '../../services/categoria.service';

@Component({
  selector: 'app-vertical-category-with-product-list',
  templateUrl: './vertical-category-with-product-list.component.html',
  styleUrl: './vertical-category-with-product-list.component.css'
})
export class VerticalCategoryWithProductListComponent implements OnInit {

  productList: ProductRowResponse[] = [];
  nombreCategoria!: string;
  route: ActivatedRoute = inject(ActivatedRoute);

  constructor(private service: CategoriaService) {
    this.nombreCategoria = this.route.snapshot.params['nombreCategoria'];
  }

  ngOnInit(): void {
    this.service.getProdctCategory(this.nombreCategoria).subscribe(resp =>
      this.productList = resp);
    console.log(this.productList)
  }
}
