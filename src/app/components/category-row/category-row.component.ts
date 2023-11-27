import { Component, EventEmitter, Input, Output} from '@angular/core';
import { CategoriaRowResponse } from '../../models/categoria-row.interface';
import { Router } from '@angular/router';
import { CategoriaService } from '../../services/categoria.service';


@Component({
  selector: 'app-category-row',
  templateUrl: './category-row.component.html',
  styleUrl: './category-row.component.css'
})
export class CategoryRowComponent {

  @Input() categoria: CategoriaRowResponse | undefined;
  mostrarFormulario = false;
  editNombreCat: String = ''

  constructor(private router: Router, private categoriaService: CategoriaService) { }

  categoriaProducto(nombreCategoria?: String) {
    console.log(this.categoria?.nombre);
    if (nombreCategoria) {
      this.router.navigate([`/admin/categorias/${nombreCategoria.toLowerCase()}`]);
    } else {
      this.router.navigate(['/admin/categorias']);
    }
  }

  editCategoria() {
    this.categoriaService.editCategoria(this.categoria!.nombre).subscribe(resp => {
      this.categoria!.nombre = this.editNombreCat;
      this.router.navigate(['/admin/categorias']);
    });
  }

}
