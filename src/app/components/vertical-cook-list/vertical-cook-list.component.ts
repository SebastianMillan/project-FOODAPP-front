import { Component, Input, OnInit } from '@angular/core';
import { OrderCocinero, OrderListCocineroResponse } from '../../models/order-list-cocinero.interface';

@Component({
  selector: 'app-vertical-cook-list',
  templateUrl: './vertical-cook-list.component.html',
  styleUrl: './vertical-cook-list.component.css'
})
export class VerticalCookListComponent{
  
  @Input() listOrders: OrderCocinero[] | undefined;
}
