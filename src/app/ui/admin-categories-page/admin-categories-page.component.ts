import { Component, Input, OnInit } from '@angular/core';
import { CategoriaRowResponse } from '../../models/categoria-row.interface';
import { CategoriaService } from '../../services/categoria.service';
import { NuevaCategoriaResponse } from '../../models/new-categoria.interface';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-categories-page',
  templateUrl: './admin-categories-page.component.html',
  styleUrl: './admin-categories-page.component.css',
})
export class AdminCategoriesPageComponent implements OnInit {

  categorias: CategoriaRowResponse[] = [];
  mostrarFormulario: boolean = false;
  nombreCategoria: String = '';

  constructor(
    private categoriaService: CategoriaService,
    private route: Router
  ) {}

  ngOnInit(): void {
    this.categoriaService.getCategorias().subscribe((resp) => {
      this.categorias = resp;
    });
  }

  guardarCategoria() {
    this.categoriaService
      .addCategoria(this.nombreCategoria)
      .subscribe((categoria: NuevaCategoriaResponse) => {
        alert(`Categoria ${categoria.nombre} añadida correctamente`);
        this.actualizarListaCategorias();
        this.route.navigate([`/admin/categorias`]);
      });
  }

  private actualizarListaCategorias() {
    this.categoriaService.getCategorias().subscribe((resp) => {
      this.categorias = resp;
    });
  }

  cancelar() {
    this.mostrarFormulario = false;
  }
  
  setNombreCategoria($event: String){
    this.nombreCategoria = $event;
  }

}
