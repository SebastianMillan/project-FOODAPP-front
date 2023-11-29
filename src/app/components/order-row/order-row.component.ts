import { Component, Input } from '@angular/core';
import { ListOrderAdminResponse } from '../../models/list-order-admin.interface';
import { PedidoShort } from '../../models/client-detail.interface';
import { Router } from '@angular/router';


@Component({
  selector: 'app-order-row',
  templateUrl: './order-row.component.html',
  styleUrl: './order-row.component.css'
})
export class OrderRowComponent {

  @Input() order!: ListOrderAdminResponse

  @Input() pedidoToShow!: PedidoShort;

  constructor(private router: Router) { }

  showDetails() {
    this.router.navigate(['/pedido', this.pedidoToShow?.id]);
  }

  redondearImporte() {
    return Math.round(this.pedidoToShow.importeTotal * 100) / 100;
  }
}
