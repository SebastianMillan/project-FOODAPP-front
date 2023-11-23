import { Component, OnInit } from '@angular/core';
import { TrabajadorResponse } from '../../models/Get-trabajador-list.interface';
import { TrabajadorServiceTsService } from '../../services/trabajador.service.ts.service';

@Component({
  selector: 'app-vertical-worker-list',
  templateUrl: './vertical-worker-list.component.html',
  styleUrl: './vertical-worker-list.component.css'
})
export class VerticalWorkerListComponent implements OnInit {
  trabajadorList: TrabajadorResponse[] = [];

  constructor(private trabajadorService: TrabajadorServiceTsService) { }

  ngOnInit(): void {
    this.trabajadorService.getTrabajadoresList().subscribe(resp => {
      this.trabajadorList = resp;
    })
  }

}
