import { Component, OnInit, Input } from '@angular/core';
import { CategoriaService } from '../../services/categoria.service';
import { CategoriaRowResponse } from '../../models/categoria-row.interface';

@Component({
  selector: 'app-vertical-category-list',
  templateUrl: './vertical-category-list.component.html',
  styleUrl: './vertical-category-list.component.css'
})
export class VerticalCategoryListComponent{

  @Input() listCategoria: CategoriaRowResponse [] = [];

  constructor(private categoriaService: CategoriaService) { }

  getCategories(){
    this.categoriaService.getCategorias().subscribe(resp => {
      this.listCategoria = resp;
    })

  }
}
