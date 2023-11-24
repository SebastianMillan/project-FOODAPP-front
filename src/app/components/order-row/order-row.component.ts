import { Component, Input } from '@angular/core';
import { PedidoShort } from '../../models/client-detail.interface';

@Component({
  selector: 'app-order-row',
  templateUrl: './order-row.component.html',
  styleUrl: './order-row.component.css'
})
export class OrderRowComponent {
  @Input() pedidoToShow: PedidoShort | undefined;
}
