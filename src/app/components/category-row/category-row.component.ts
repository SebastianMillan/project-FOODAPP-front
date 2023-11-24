import { Component, Input } from '@angular/core';
import { CategoriaRowResponse } from '../../models/categoria-row.interface';
import { Router } from '@angular/router';

@Component({
  selector: 'app-category-row',
  templateUrl: './category-row.component.html',
  styleUrl: './category-row.component.css'
})
export class CategoryRowComponent {

  @Input() categoria: CategoriaRowResponse | undefined;
  // nombreCategoria?: String;

  constructor(private router: Router) { }

  categoriaProducto(nombreCategoria?: String) {
    console.log(this.categoria?.nombre)
    this.router.navigate([`/admin/categorias/${nombreCategoria}`]);
  }
}
