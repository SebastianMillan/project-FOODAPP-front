import { Component, Input } from '@angular/core';
import { ProductRowResponse } from '../../models/product-row.interface';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-product-row',
  templateUrl: './product-row.component.html',
  styleUrl: './product-row.component.css'
})
export class ProductRowComponent {

  id!: number;

  @Input() product!: ProductRowResponse;

  constructor(private service: ProductService) { }

  deleteProduct(idProducto: string) {
    this.service.deleteProduct(idProducto).subscribe(
      () => console.log('borrado')
    );

    console.log(idProducto)
  }
  

}
