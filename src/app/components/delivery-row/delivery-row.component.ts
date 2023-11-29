import { Component, Input } from '@angular/core';
import { Pedidos } from '../../models/PedidoRepartidor.interface';
import { PedidoService } from '../../services/pedido.service';

@Component({
  selector: 'app-delivery-row',
  templateUrl: './delivery-row.component.html',
  styleUrl: './delivery-row.component.css'
})
export class DeliveryRowComponent {

  @Input() pedido!: Pedidos;
  estadoPedido: string = '';
  mostrarDetalles: boolean = false;
  fechaArreglada: string = '';

  constructor(private pedidoService: PedidoService){}

  ngOnInit(): void {
    if (this.pedido.estadoPedido == 'EN_PREPARACION') {
      this.estadoPedido = 'badge fs-4 estado-pedido bg-warning text-dark'
    } else if (this.pedido.estadoPedido == 'CONFIRMADO') {
      this.estadoPedido = 'badge fs-4 estado-pedido bg-info text-dark'
    } else if (this.pedido.estadoPedido == 'ABIERTO') {
      this.estadoPedido = 'badge fs-4 estado-pedido bg-danger text-dark'
    } else if (this.pedido.estadoPedido == 'EN_CAMINO') {
      this.estadoPedido = 'badge fs-4 estado-pedido bg-primary text-dark'
    } else {
      this.estadoPedido = 'badge fs-4 estado-pedido bg-success text-dark'  
    }
  }

  formatEstadoPedidoName() {
    return this.pedido.estadoPedido.replace('_', ' ');
  }

  arreglarFecha() {
    this.fechaArreglada = this.pedido.fecha;
    return this.fechaArreglada.substring(0, 16);
  }
  
}
