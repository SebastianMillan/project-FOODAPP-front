import { Component, OnInit, inject } from '@angular/core';
import { ProductRowResponse } from '../../models/product-row.interface';
import { CategoryService } from '../../services/category.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-vertical-product-list',
  templateUrl: './vertical-product-list.component.html',
  styleUrl: './vertical-product-list.component.css'
})
export class VerticalProductListComponent implements OnInit{
  productList: ProductRowResponse[] = [];
  nombreCategoria!: string;
  route: ActivatedRoute = inject(ActivatedRoute);

  constructor(private service: CategoryService){ 
    this.nombreCategoria = this.route.snapshot.params['nombreCategoria'];
  }

  ngOnInit(): void {
    this.service.getProdctCategory(this.nombreCategoria).subscribe(resp => 
      this.productList = resp);
      console.log(this.productList)
  }
}
