import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Order, OrderDetailsResponse } from '../../models/order-details.interface';

@Component({
  selector: 'app-admin-row-vertical',
  templateUrl: './admin-row-vertical.component.html',
  styleUrl: './admin-row-vertical.component.css'
})
export class AdminRowVerticalComponent {

  @Input() order!: Order;
  @Output() orderClick = new EventEmitter<string>();

  Info() {
    this.orderClick.emit(this.order.id);
  }

  formatEstadoPedidoName() {
    return this.order.estadoPedido.replace('_', ' ')
  }


}
