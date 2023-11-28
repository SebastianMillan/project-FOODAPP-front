import { Component, Input, OnInit } from '@angular/core';
import { LineasPedido } from '../../models/PedidoDetails.interface';
import { PedidoService } from '../../services/pedido.service';

@Component({
  selector: 'app-vertical-line-order-list',
  templateUrl: './vertical-line-order-list.component.html',
  styleUrl: './vertical-line-order-list.component.css'
})
export class VerticalLineOrderListComponent implements OnInit{

  @Input() listLineaPedido: LineasPedido[] = [];
  idPedido!: string;

  constructor(private pedidoService: PedidoService){}


  ngOnInit(): void {
    this.getLineasPedido(this.idPedido);
  }

  getLineasPedido(idPedido: string){
    
    this.pedidoService.getPedidoDetails(idPedido).subscribe(resp => {
      this.listLineaPedido = resp.lineasPedido;
    })
  }
}
