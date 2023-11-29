import { Component, Input } from '@angular/core';
import { LineasPedido } from '../../models/PedidoDetails.interface'; 


@Component({
  selector: 'app-line-order-row',
  templateUrl: './line-order-row.component.html',
  styleUrl: './line-order-row.component.css'
})
export class LineOrderRowComponent {

  @Input() lineaPedido!: LineasPedido;

  redondearImporte() {
    return Math.round(this.lineaPedido.subtotal * 100) / 100;
  }

}