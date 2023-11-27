import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CategoriaRowResponse } from '../../models/categoria-row.interface';
import { Router } from '@angular/router';
import { CategoriaService } from '../../services/categoria.service';


@Component({
  selector: 'app-category-row',
  templateUrl: './category-row.component.html',
  styleUrl: './category-row.component.css'
})
export class CategoryRowComponent {

  @Input() categoria!: CategoriaRowResponse;
  @Output() deleteClick = new EventEmitter<String>();
  nombreCategoria!: String;

  constructor(private router: Router, private categoriaService: CategoriaService) { }

  categoriaProducto(nombreCategoria?: String) {
    console.log(this.categoria?.nombre)
    this.router.navigate([`/admin/categorias/${nombreCategoria?.toLocaleLowerCase()}`]);
  }

  deleteCategoria(nombreCat: String){
    this.categoriaService.deleteCategoria(nombreCat).subscribe(resp => {
      this.deleteClick.emit(nombreCat);
      this.router.navigate([`/admin/categorias`]);
      alert("Categoría eliminada con éxito.")
    })
  }

}
