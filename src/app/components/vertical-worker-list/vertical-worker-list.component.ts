import { Component, OnInit } from '@angular/core';
import { Trabajador } from '../../models/Get-trabajador-list.interface';
import { TrabajadorServiceTsService } from '../../services/trabajador.service.ts.service';

@Component({
  selector: 'app-vertical-worker-list',
  templateUrl: './vertical-worker-list.component.html',
  styleUrl: './vertical-worker-list.component.css'
})
export class VerticalWorkerListComponent implements OnInit {
  trabajadorList!: Trabajador[];
  numPage = 1;
  numMTarabajadores = 0;

  constructor(private trabajadorService: TrabajadorServiceTsService) { }

  ngOnInit(): void {
    this.loadNewPage();
  }

  loadNewPage(): void {
    this.trabajadorService.getTrabajadoresList(this.numPage).subscribe(resp => {
      this.trabajadorList = resp.content;
      this.numMTarabajadores = resp.totalElements;
    })
  }

}
