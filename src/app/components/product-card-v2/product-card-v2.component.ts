import { Component, Input, OnInit } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { ProductAllDetails } from '../../models/new-product.interface';
import { MenuResponse } from '../../models/menu.interface';

@Component({
  selector: 'app-product-card-v2',
  templateUrl: './product-card-v2.component.html',
  styleUrl: './product-card-v2.component.css'
})
export class ProductCardV2Component implements OnInit{

  // product!: MenuResponse;
  productosPorCategoria : MenuResponse[] = [];

  constructor(private productoService: ProductService) {}

  ngOnInit(): void {
    this.productoService.getProductGruopByCategory().subscribe(
      resp => {
        this.productosPorCategoria = resp;
      }
    );
  }

}
