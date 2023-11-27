import { Component, Input } from '@angular/core';
import { ListOrderAdminResponse } from '../../models/list-order-admin.interface';
import { PedidoShort } from '../../models/client-detail.interface';


@Component({
  selector: 'app-order-row',
  templateUrl: './order-row.component.html',
  styleUrl: './order-row.component.css'
})
export class OrderRowComponent {


  @Input() order!: ListOrderAdminResponse
  @Input() pedidoToShow: PedidoShort | undefined;

}
