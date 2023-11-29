import { Component, Input, OnInit } from '@angular/core';
import { LineasPedido } from '../../models/PedidoDetails.interface';
import { PedidoService } from '../../services/pedido.service';

@Component({
  selector: 'app-vertical-line-order-list',
  templateUrl: './vertical-line-order-list.component.html',
  styleUrl: './vertical-line-order-list.component.css'
})
export class VerticalLineOrderListComponent{

  @Input() listLineaPedido: LineasPedido[] = [];
}
