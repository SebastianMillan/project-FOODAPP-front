import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CategoriaRowResponse } from '../../models/categoria-row.interface';
import { Router } from '@angular/router';
import { CategoriaService } from '../../services/categoria.service';

@Component({
  selector: 'app-category-row',
  templateUrl: './category-row.component.html',
  styleUrl: './category-row.component.css',
})
export class CategoryRowComponent {
  @Input() categoria!: CategoriaRowResponse;
  @Output() categoriaEditada = new EventEmitter<String>();
  mostrarFormulario = false;
  editNombreCat: String = '';

  constructor(
    private router: Router,
    private categoriaService: CategoriaService
  ) {}

  categoriaProducto(nombreCategoria?: String) {
    console.log(this.categoria?.nombre);
    if (nombreCategoria) {
      this.router.navigate([
        `/admin/categorias/${nombreCategoria.toLowerCase()}`,
      ]);
    } else {
      this.router.navigate(['/admin/categorias']);
    }
  }

  editCategoria(): void {
    this.categoriaService.editCategoria(this.categoria?.nombre).subscribe(resp => {
    this.categoria.nombre = this.editNombreCat;
    // this.categoriaEditada.emit(this.categoria.nombre);
    alert("La categoría se ha editado correctamente");
    this.router.navigate(['/admin/categorias']);  
    });
  }
}
