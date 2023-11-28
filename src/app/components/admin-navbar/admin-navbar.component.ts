import { Component, OnInit } from '@angular/core';
import { ClientDetailResponse } from '../../models/client-detail.interface';
import { AdminService } from '../../services/admin.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-navbar',
  templateUrl: './admin-navbar.component.html',
  styleUrl: './admin-navbar.component.css'
})
export class AdminNavbarComponent implements OnInit {

  usuarioLogueado!: ClientDetailResponse;

  constructor(private adminService: AdminService, private modalService: NgbModal, private route: Router) { }

  ngOnInit(): void {
    this.adminService.getLoggedUser().subscribe(resp => {
      debugger;
      this.usuarioLogueado = resp;
      console.log(this.usuarioLogueado);
    })
  }

  cerrarSesion() {
    localStorage.clear();
    this.modalService.dismissAll('Cerrar sesión')
    this.route.navigateByUrl('/login');
  }

}
