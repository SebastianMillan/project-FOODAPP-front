import { Component, Input } from '@angular/core';
import { TrabajadorServiceTsService } from '../../services/trabajador.service.ts.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-boton-detele-trabajador',
  templateUrl: './boton-detele-trabajador.component.html',
  styleUrl: './boton-detele-trabajador.component.css'
})
export class BotonDeteleTrabajadorComponent {

  @Input() id!: string;

  constructor(private trabajadorService: TrabajadorServiceTsService, private router: Router) { }

  eliminarTrabajador() {
    this.trabajadorService.deleteTrabajador(this.id).subscribe(resp => {
      this.router.navigateByUrl('/admin/trabajador');
      console.log(this.id);
    })
  }
}
