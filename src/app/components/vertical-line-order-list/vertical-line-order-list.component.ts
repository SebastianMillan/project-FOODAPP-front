import { Component, Input, OnInit } from '@angular/core';
import { OrderDetailsResponse } from '../../models/order-details.interface';
import { OrderService } from '../../services/order.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-vertical-line-order-list',
  templateUrl: './vertical-line-order-list.component.html',
  styleUrl: './vertical-line-order-list.component.css'
})
export class VerticalLineOrderListComponent implements OnInit {

  orderList: OrderDetailsResponse[] = [];
  OrderSelected!: OrderDetailsResponse;

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
