import { Component, EventEmitter, Input, Output } from '@angular/core';
import { OrderDetailsResponse } from '../../models/order-details.interface';

@Component({
  selector: 'app-line-order-row',
  templateUrl: './line-order-row.component.html',
  styleUrl: './line-order-row.component.css'
})
export class LineOrderRowComponent {

  @Input() order!: OrderDetailsResponse;
  @Output() orderClick = new EventEmitter<string>();

  Info() {
    this.orderClick.emit(this.order.id);
  }

}
