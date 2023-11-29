import { Component, OnInit } from '@angular/core';
import { Pedidos } from '../../models/PedidoRepartidor.interface';
import { PedidoService } from '../../services/pedido.service';

@Component({
  selector: 'app-delivery-page',
  templateUrl: './delivery-page.component.html',
  styleUrl: './delivery-page.component.css'
})
export class DeliveryPageComponent implements OnInit {

  totalPedidos = 0;
  pedidosPorPagina = 0;
  cantPaginas = 5;
  pagina = 1;

  pedidosRepartidor!: Pedidos[];

  constructor(private pedidoService: PedidoService) { }

  ngOnInit(): void {
    this.actualizarPagina();
  }

  actualizarPagina() {
    this.pedidoService.getPedidosRepartidor(this.pagina - 1).subscribe(resp => {
      this.pedidosRepartidor = resp.content;
      this.pedidosPorPagina = resp.pageable.pageSize;
      this.totalPedidos = resp.numberOfElements;
    })
  }
}
