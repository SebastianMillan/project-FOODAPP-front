import { Component, OnInit } from '@angular/core';
import { ClientDetailResponse } from '../../models/client-detail.interface';
import { AdminService } from '../../services/admin.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Router } from '@angular/router';
import { TrabajadorServiceTsService } from '../../services/trabajador.service.ts.service';
import { Trabajador } from '../../models/Get-trabajador.interface';
import { TrabajadorLoggedResponse } from '../../models/looged-trabajador.interface';

@Component({
  selector: 'app-admin-navbar',
  templateUrl: './admin-navbar.component.html',
  styleUrl: './admin-navbar.component.css'
})
export class AdminNavbarComponent implements OnInit {

  admin!: TrabajadorLoggedResponse;
  accountId!: string;

  constructor(private trabajadorService: TrabajadorServiceTsService, private modalService: NgbModal, private route: Router) { }

  ngOnInit(): void {
    this.accountId = localStorage.getItem('account_id') as string;
    if (this.accountId !== null) {
      this.trabajadorService.getTrabajadoLogged().subscribe(resp => {
        this.admin = resp;
        console.log(this.admin);
      });
    }
  }

  cerrarSesion() {
    localStorage.clear();
    this.modalService.dismissAll('Cerrar sesión')
    this.route.navigateByUrl('/login');
  }

}
