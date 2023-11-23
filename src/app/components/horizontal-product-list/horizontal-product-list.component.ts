import { Component, Input } from '@angular/core';
import { ProductCardResponse } from '../../models/product-card.interface';

@Component({
  selector: 'app-horizontal-product-list',
  templateUrl: './horizontal-product-list.component.html',
  styleUrl: './horizontal-product-list.component.css'
})
export class HorizontalProductListComponent {
  @Input() listProducto: ProductCardResponse[] = [];
}
