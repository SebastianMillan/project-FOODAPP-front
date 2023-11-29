import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product, ProductRowResponse } from '../../models/product-row.interface';
import { CategoriaService } from '../../services/categoria.service';

@Component({
  selector: 'app-vertical-category-with-product-list',
  templateUrl: './vertical-category-with-product-list.component.html',
  styleUrl: './vertical-category-with-product-list.component.css'
})
export class VerticalCategoryWithProductListComponent implements OnInit {

  productList!: Product[];
  nombreCategoria!: string;
  route: ActivatedRoute = inject(ActivatedRoute);

  totalProductos = 0;
  productosPorPagina = 0;
  cantPaginas = 5;
  pagina = 1;

  constructor(private service: CategoriaService) {
    this.nombreCategoria = this.route.snapshot.params['nombreCategoria'];
  }

  ngOnInit(): void {
    this.actualizarPagina();
  }

  actualizarPagina() {
    this.service.getProdctCategory(this.nombreCategoria, this.pagina - 1).subscribe(resp => {
      this.productList = resp.content;
      this.productosPorPagina = resp.pageable.pageSize;
      this.totalProductos = resp.numberOfElements;
    });
  }

}
