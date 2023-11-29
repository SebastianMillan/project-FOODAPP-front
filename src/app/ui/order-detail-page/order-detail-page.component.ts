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
    this.router.params.subscribe(p => this.idPedido= p['id'])
    this.pedidoService.getPedidoDetails(this.idPedido).subscribe(resp => {
      this.pedido=resp;
      this.lineasPedido = resp.lineasPedido;
    })
  }

  formatName() {
    return this.pedido?.estadoPedido.replace("_", "");
  }

  getImporteTotal() {
    let importeTotal = 0;
    for (let i = 0; i < this.lineasPedido.length; i++) {
      importeTotal += this.lineasPedido[i].cantidadProductos * this.lineasPedido[i].precioUnit;      
    }
    return Math.round(importeTotal*100)/100;
  }

  comprobarPedidoOpen() {
    if (this.pedido?.estadoPedido == 'ABIERTO') {
      return true;
    } else {
      return false
    }
  }
  
}
