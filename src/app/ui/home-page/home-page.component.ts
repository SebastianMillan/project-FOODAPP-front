import { Component, OnInit } from '@angular/core';
import { ProductCardResponse } from '../../models/product-card.interface';
import { ProductService } from '../../services/product.service';
import { forkJoin } from 'rxjs';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css'
})
export class HomePageComponent implements OnInit{
  
  offerProduct: ProductCardResponse[] = [];
  newsProduct: ProductCardResponse[] = [];

  constructor(private productService: ProductService){}

  ngOnInit(): void {
    this.productService.getNewsProducts().subscribe(resp => {
      this.newsProduct = resp;
    })
    this.productService.getOfferProducts().subscribe(resp => {
      this.offerProduct = resp;
    })
  }



}
