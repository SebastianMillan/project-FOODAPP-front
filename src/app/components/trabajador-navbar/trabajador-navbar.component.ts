import { Component } from '@angular/core';
import { Trabajador } from '../../models/Get-trabajador.interface';
import { TrabajadorServiceTsService } from '../../services/trabajador.service.ts.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Router } from '@angular/router';

@Component({
  selector: 'app-trabajador-navbar',
  templateUrl: './trabajador-navbar.component.html',
  styleUrl: './trabajador-navbar.component.css'
})
export class TrabajadorNavbarComponent {
  trabajador!: Trabajador;
  accountId!: string;

  constructor(private trabajadorService: TrabajadorServiceTsService, private modalService: NgbModal, private route: Router) { }

  ngOnInit(): void {
    this.accountId = localStorage.getItem('account_id') as string;
    if (this.accountId !== null) {
      this.trabajadorService.getTrabajador(this.accountId).subscribe(resp => {

        this.trabajador = resp;
        console.log(this.trabajador);
      });
    }
  }

  cerrarSesion() {
    localStorage.clear();
    this.modalService.dismissAll('Cerrar sesión')
    this.route.navigateByUrl('/login');
  }

}
