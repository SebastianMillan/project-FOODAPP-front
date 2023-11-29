import { Component, Input } from '@angular/core';
import { PedidoShort } from '../../models/client-detail.interface';
import { Router } from '@angular/router';

@Component({
  selector: 'app-order-row',
  templateUrl: './order-row.component.html',
  styleUrl: './order-row.component.css'
})
export class OrderRowComponent {

  @Input() pedidoToShow: PedidoShort | undefined;

  constructor(private router: Router){}

  showDetails() {
    this.router.navigate(['/pedido', this.pedidoToShow?.id]);

  }
}
