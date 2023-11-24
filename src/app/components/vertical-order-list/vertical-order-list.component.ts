import { Component, Input } from '@angular/core';
import { PedidoShort } from '../../models/client-detail.interface';

@Component({
  selector: 'app-vertical-order-list',
  templateUrl: './vertical-order-list.component.html',
  styleUrl: './vertical-order-list.component.css'
})
export class VerticalOrderListComponent {

  @Input() listPedido: PedidoShort[] | undefined;
}
