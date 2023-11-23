import { Component, Input, OnInit } from '@angular/core';
import { ProductCardResponse } from '../../models/product-card.interface';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-month-product',
  templateUrl: './month-product.component.html',
  styleUrl: './month-product.component.css'
})
export class MonthProductComponent implements OnInit{
  @Input() producto: ProductCardResponse | undefined;

  constructor(private productService: ProductService) { }
  
  ngOnInit(): void {
    this.productService.getMonthProduct().subscribe(resp => {
      this.producto = resp;
    })
  }
  


}
