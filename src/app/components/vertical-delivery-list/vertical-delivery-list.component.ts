import { Component, Input } from '@angular/core';
import { Pedidos } from '../../models/PedidoRepartidor.interface';

@Component({
  selector: 'app-vertical-delivery-list',
  templateUrl: './vertical-delivery-list.component.html',
  styleUrl: './vertical-delivery-list.component.css'
})
export class VerticalDeliveryListComponent {

  @Input() pedidosRepartidor: Pedidos[] = [];
}
