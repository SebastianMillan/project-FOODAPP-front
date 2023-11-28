import { Component, Input, OnInit } from '@angular/core';
import { OrderCocinero } from '../../models/order-list-cocinero.interface';
import { PedidoService } from '../../services/pedido.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cook-row',
  templateUrl: './cook-row.component.html',
  styleUrl: './cook-row.component.css'
})
export class CookRowComponent implements OnInit{
  
  @Input() orderToShow!: OrderCocinero;
  classEstadoPedido = '';

  constructor(private pedidoService: PedidoService, private router: Router){}

  ngOnInit(): void {
    if (this.orderToShow?.estadoPedido == 'EN_PREPARACION') {
      this.classEstadoPedido = 'badge fs-4 estado-pedido bg-warning'
    } else if (this.orderToShow?.estadoPedido == 'CONFIRMADO') {
      this.classEstadoPedido = 'badge fs-4 estado-pedido bg-info'
    } else if (this.orderToShow?.estadoPedido == 'ABIERTO') {
      this.classEstadoPedido = 'badge fs-4 estado-pedido bg-danger'
    } else if (this.orderToShow?.estadoPedido == 'EN_CAMINO') {
      this.classEstadoPedido = 'badge fs-4 estado-pedido bg-primary'
    } else {
      this.classEstadoPedido = 'badge fs-4 estado-pedido bg-success'  
    }
  }

  formatEstadoPedidoName() {
    return this.orderToShow?.estadoPedido.replace('_', ' ')
  }

  comprobarEstadoPedido() {
    if (this.orderToShow?.estadoPedido === 'EN_PREPARACION') {
      return true;
    } else {
      return false;
    }
  }
  changeToEnReparto() {
    this.pedidoService.changeEstadoPedidoCocinero('EN_CAMINO', this.orderToShow?.id).subscribe(resp => {
      window.location.reload();
    })
  }
  
}
