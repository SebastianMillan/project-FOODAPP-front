import { Component, Input } from '@angular/core';
import { ClientCardResponse } from '../../models/client-card.interface';
import { Router } from '@angular/router';

@Component({
  selector: 'app-client-row',
  templateUrl: './client-row.component.html',
  styleUrl: './client-row.component.css'
})
export class ClientRowComponent {

  @Input() clienteToShow: ClientCardResponse | undefined;

  constructor(private router : Router){}

  showClienteDetail() {
    this.router.navigate(['/admin/cliente', this.clienteToShow?.id]); 
  }
}
