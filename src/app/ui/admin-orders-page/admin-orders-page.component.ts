import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Order, OrderDetailsResponse } from '../../models/order-details.interface';
import { OrderLineResponse } from '../../models/order-line.interface';
import { OrderService } from '../../services/order.service';

@Component({
  selector: 'app-admin-orders-page',
  templateUrl: './admin-orders-page.component.html',
  styleUrl: './admin-orders-page.component.css'
})
export class AdminOrdersPageComponent implements OnInit {

  orderList!: Order[];
  OrderSelected!: OrderLineResponse;

  totalPedidos = 0; 
  pedidosPorPagina = 0;
  cantPaginas = 5;
  pagina = 1;

  constructor(private service: OrderService, private modalService: NgbModal) { }

  ngOnInit(): void {
    this.actualizarPagina();

  }

  actualizarPagina(){
    this.service.getOrderDetails(this.pagina-1).subscribe(resp =>{
      this.orderList = resp.content;
      this.pedidosPorPagina = resp.pageable.pageSize;
      this.totalPedidos = resp.numberOfElements;
    })
  }

  open(id: string, modal: any) {
    this.service.getOrderId(id).subscribe(resp => {
      this.OrderSelected = resp;
      this.modalService.open(modal);
    });
  }

}
