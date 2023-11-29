import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { OrderDetailsResponse } from '../../models/order-details.interface';
import { OrderLineResponse } from '../../models/order-line.interface';
import { OrderService } from '../../services/order.service';

@Component({
  selector: 'app-admin-orders-page',
  templateUrl: './admin-orders-page.component.html',
  styleUrl: './admin-orders-page.component.css'
})
export class AdminOrdersPageComponent implements OnInit {

  orderList: OrderDetailsResponse[] = [];
  OrderSelected!: OrderLineResponse;

  constructor(private service: OrderService, private modalService: NgbModal) { }

  ngOnInit(): void {
    this.service.getOrderDetails().subscribe(resp => {
      this.orderList = resp;
    })

  }

  open(id: string, modal: any) {
    this.service.getOrderId(id).subscribe(resp => {
      this.OrderSelected = resp;
      this.modalService.open(modal);
    });
  }

}
