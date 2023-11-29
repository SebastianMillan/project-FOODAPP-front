import { Component, ElementRef, Input, ViewChild } from '@angular/core';
import { Trabajador } from '../../models/Get-trabajador.interface';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Router } from '@angular/router';
import { TrabajadorLoggedResponse } from '../../models/looged-trabajador.interface';

@Component({
  selector: 'app-modal-admin',
  templateUrl: './modal-admin.component.html',
  styleUrl: './modal-admin.component.css'
})
export class ModalAdminComponent {

  @ViewChild('miModal') miModal!: ElementRef;
  @Input() admin!: TrabajadorLoggedResponse;
  nombre!: string;
  userName!: string;

  constructor(private modalService: NgbModal, private route: Router) { }

  open(modal: any) {
    debugger;
    this.nombre = this.admin.nombre;
    this.userName = this.admin.username;
    this.modalService.open(modal,

      {
        keyboard: false,
        size: 'sm',
        backdrop: false,

        scrollable: true
      });
  }

  cerrarSesion() {
    localStorage.clear();
    this.modalService.dismissAll('Cerrar sesión')
    this.route.navigateByUrl('/login');
  }
}
