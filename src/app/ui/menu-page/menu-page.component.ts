import { Component, OnInit } from '@angular/core';
import { ProductAllDetails } from '../../models/new-product.interface';
import { ProductService } from '../../services/product.service';
import { CategoryProductResponse, Producto } from '../../models/CategoriaConProductos.interface';
import { CategoriaService } from '../../services/categoria.service';

@Component({
  selector: 'app-menu-page',
  templateUrl: './menu-page.component.html',
  styleUrl: './menu-page.component.css'
})
export class MenuPageComponent implements OnInit {

  categoryProductList: CategoryProductResponse[] = [];

  constructor(private service: CategoriaService) { }

  ngOnInit(): void {
    this.service.getCategoryWithProducts().subscribe(resp => {
      this.categoryProductList = resp;
    })
  }
}
