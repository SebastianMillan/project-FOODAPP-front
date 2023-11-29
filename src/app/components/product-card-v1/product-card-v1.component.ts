import { Component, Input } from '@angular/core';
import { ProductCardResponse } from '../../models/product-card.interface';
import { PedidoService } from '../../services/pedido.service';

@Component({
  selector: 'app-product-card-v1',
  templateUrl: './product-card-v1.component.html',
  styleUrl: './product-card-v1.component.css'
})
export class ProductCardV1Component {

  @Input() producto!: ProductCardResponse;

  constructor(private pedidoService: PedidoService){}

  addToCarrito() {
    this.pedidoService.addProductoToCarrito(this.producto?.id).subscribe();
  }
}
