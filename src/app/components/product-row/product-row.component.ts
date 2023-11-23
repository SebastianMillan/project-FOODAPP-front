import { Component, Input } from '@angular/core';
import { ProductRowResponse } from '../../models/product-row.interface';

@Component({
  selector: 'app-product-row',
  templateUrl: './product-row.component.html',
  styleUrl: './product-row.component.css'
})
export class ProductRowComponent {

  @Input() product!: ProductRowResponse;

}
