import { Component, OnInit } from '@angular/core';
import { OrderCocinero, OrderListCocineroResponse } from '../../models/order-list-cocinero.interface';
import { PedidoService } from '../../services/pedido.service';

@Component({
  selector: 'app-cook-page',
  templateUrl: './cook-page.component.html',
  styleUrl: './cook-page.component.css'
})
export class CookPageComponent implements OnInit{
  
  totalOrders = 0;
  numOrdersByPage=0;
  cantPageShow=5;
  page=1;

  orderList: OrderCocinero[] | undefined;

  constructor(private pedidoService: PedidoService){}

  ngOnInit(): void {
    this.pedidoService.getCocineroOrders(this.page-1).subscribe(resp => {
      this.orderList = resp.content;
      this.numOrdersByPage = resp.pageable.pageSize;
      this.totalOrders = resp.numberOfElements;
    })
  }
  loadPage() {
    this.pedidoService.getCocineroOrders(this.page-1).subscribe(resp => {
      this.orderList = resp.content;
      this.numOrdersByPage = resp.pageable.pageSize;
      this.totalOrders = resp.numberOfElements;
    })
  }

}
