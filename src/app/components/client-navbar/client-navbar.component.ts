import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ClientDetailResponse } from '../../models/client-detail.interface';
import { AdminService } from '../../services/admin.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-client-navbar',
  templateUrl: './client-navbar.component.html',
  styleUrl: './client-navbar.component.css'
})
export class ClientNavbarComponent implements OnInit {

  usuarioLogueado!: ClientDetailResponse;


  constructor(private usuarioService: AdminService) { }

  ngOnInit(): void {
    this.usuarioService.getLoggedUser().subscribe(resp => {
      this.usuarioLogueado = resp;
    })
  }

}
