import { Component, Input, OnInit } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { Categoria, ProductAllDetails } from '../../models/new-product.interface';
import { CategoriaService } from '../../services/categoria.service';
import { CategoryProductResponse } from '../../models/CategoriaConProductos.interface';


@Component({
  selector: 'app-product-card-v2',
  templateUrl: './product-card-v2.component.html',
  styleUrl: './product-card-v2.component.css'
})
export class ProductCardV2Component {

  @Input() cat!: CategoryProductResponse;



}
