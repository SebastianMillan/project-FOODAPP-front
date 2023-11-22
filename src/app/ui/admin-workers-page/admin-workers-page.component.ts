import { Component, OnInit } from '@angular/core';
import { TrabajadorResponse } from '../../models/Get-trabajador-list.interface';
import { TrabajadorServiceTsService } from '../../services/trabajador.service.ts.service';

@Component({
  selector: 'app-admin-workers-page',
  templateUrl: './admin-workers-page.component.html',
  styleUrl: './admin-workers-page.component.css'
})
export class AdminWorkersPageComponent implements OnInit {
  trabajadorList!: TrabajadorResponse;

  constructor(private trabajadorService: TrabajadorServiceTsService) { }

  ngOnInit(): void {
    this.trabajadorService.getTrabajadoresList().subscribe(resp => {
      this.trabajadorList = resp;
    })
  }

  setTrabajador(): TrabajadorResponse {
    return this.trabajadorList;

  }

}
