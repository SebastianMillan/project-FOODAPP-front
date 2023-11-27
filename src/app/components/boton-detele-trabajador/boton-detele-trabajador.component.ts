import { Component, Input } from '@angular/core';
import { TrabajadorServiceTsService } from '../../services/trabajador.service.ts.service';


@Component({
  selector: 'app-boton-detele-trabajador',
  templateUrl: './boton-detele-trabajador.component.html',
  styleUrl: './boton-detele-trabajador.component.css'
})
export class BotonDeteleTrabajadorComponent {

  @Input() id!: string;

  constructor(private trabajadorService: TrabajadorServiceTsService) { }

  eliminarTrabajador() {
    this.trabajadorService.deleteTrabajador(this.id).subscribe(resp => {
      window.location.href = 'http://localhost:4200/admin/trabajador';
      console.log(this.id);
    })
  }
}
