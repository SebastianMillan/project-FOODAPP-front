import { Component } from '@angular/core';
import { LineasPedido, PedidoDetailResponse } from '../../models/PedidoDetails.interface';
import { PedidoService } from '../../services/pedido.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-order-detail-page',
  templateUrl: './order-detail-page.component.html',
  styleUrl: './order-detail-page.component.css'
})
export class OrderDetailPageComponent {

  lineasPedido: LineasPedido[] = [];
  pedido: PedidoDetailResponse | undefined;
  idPedido!: string;

  constructor(private pedidoService: PedidoService, private router: ActivatedRoute){}


  ngOnInit(): void {
    this.getLineasPedido(this.idPedido);
  }

  getLineasPedido(idPedido: string){
    this.router.params.subscribe(p => this.idPedido= p['id'])
    this.pedidoService.getPedidoDetails(idPedido).subscribe(resp => {
      this.pedido=resp;
      this.lineasPedido = resp.lineasPedido;
    })
  }
  
}
