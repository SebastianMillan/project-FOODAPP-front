import { Component, OnInit } from '@angular/core';
import { CategoriaRowResponse } from '../../models/categoria-row.interface';
import { CategoriaService } from '../../services/categoria.service';

@Component({
  selector: 'app-admin-categories-page',
  templateUrl: './admin-categories-page.component.html',
  styleUrl: './admin-categories-page.component.css'
})
export class AdminCategoriesPageComponent implements OnInit{

  categorias: CategoriaRowResponse[] = [];

  constructor(private categoriaService: CategoriaService){}
  
  ngOnInit(): void {
    this.categoriaService.getCategorias().subscribe(resp => {
      this.categorias = resp;
    })
  }
  
}
