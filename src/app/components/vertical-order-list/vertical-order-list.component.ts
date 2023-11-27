
import { Component, OnInit } from '@angular/core';
import { ListOrderAdminResponse } from '../../models/list-order-admin.interface';
import { OrderService } from '../../services/order.service';

import { Input } from '@angular/core';
import { PedidoShort } from '../../models/client-detail.interface';


@Component({
  selector: 'app-vertical-order-list',
  templateUrl: './vertical-order-list.component.html',
  styleUrl: './vertical-order-list.component.css'
})
export class VerticalOrderListComponent implements OnInit{

  constructor(private service: OrderService){ }

  orderList: ListOrderAdminResponse [] = [];

  ngOnInit(): void {
    this.service.getOrderListAdmin().subscribe(resp => {
      this.orderList = resp;
    })
  }

  @Input() listPedido: PedidoShort[] | undefined;
}
