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
  @Output() deleteClick = new EventEmitter<String>();
  mostrarFormulario = false;
  editNombreCat: String = '';
  nombreCategoria!: String;

  constructor(private router: Router, private categoriaService: CategoriaService) { }


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

  editCategoria() {
    this.categoriaService.editCategoria(this.categoria.id, this.editNombreCat).subscribe(resp =>{
      this.categoriaEditada.emit(this.editNombreCat);

    })
  }

  deleteCategoria(){
    this.categoriaService.deleteCategoria(this.categoria.id).subscribe(resp => {
      this.deleteClick.emit(this.categoria.id);
      alert("Categoría eliminada con éxito.")
    })
  }

}
