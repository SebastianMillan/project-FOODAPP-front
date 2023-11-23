import { Component, Input } from '@angular/core';
import { Trabajador, TrabajadorResponse } from '../../models/Get-trabajador-list.interface';

@Component({
  selector: 'app-worker-row',
  templateUrl: './worker-row.component.html',
  styleUrl: './worker-row.component.css'
})
export class WorkerRowComponent {

  @Input() trabajador !: Trabajador;

}
