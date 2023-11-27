import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { ProductAllDetails } from '../../models/new-product.interface';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-product-detail-page',
  templateUrl: './admin-product-detail-page.component.html',
  styleUrl: './admin-product-detail-page.component.css'
})
export class AdminProductDetailPageComponent {

  nombre!: string;
  url!: string;
  descripcion!: string;
  tags!: string;
  precio!: number;
  categoria!: string;
  descuento!: number;
  id!: string;


  constructor(private service: ProductService, private route: Router) { }

  addProducto() {
    const tagsArray: string[] = this.tags.split(',');
    const precioConDescuento = +(this.precio * (1 - this.descuento / 100)).toFixed(2);
    this.service.addProduct(this.nombre, this.descripcion, tagsArray, precioConDescuento, this.categoria.toLowerCase(), this.url)
      .subscribe((producto: ProductAllDetails) => {
        console.log('Producto añadido:', producto);
        this.route.navigate([`/admin/categorias/${this.categoria.toLocaleLowerCase()}`]);
      });
  }

}
