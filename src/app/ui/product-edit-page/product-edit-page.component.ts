import { Component, OnInit, inject } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-product-edit-page',
  templateUrl: './product-edit-page.component.html',
  styleUrl: './product-edit-page.component.css'
})
export class ProductEditPageComponent implements OnInit {

  id!: string;
  nombreCategoria!: string;

  nombre!: string;
  url!: string;
  descripcion!: string;
  tags: string[] = [];
  precio!: number;
  categoria!: string;
  descuento!: number;

  route: ActivatedRoute = inject(ActivatedRoute);

  constructor(private router: Router, private service: ProductService) {
    this.id = this.route.snapshot.params['id'];
  }

  ngOnInit(): void {
    this.service.productDetails(this.id).subscribe(resp => {
      this.nombre = resp.nombre;
      this.url = resp.imagen;
      this.descripcion = resp.descripcion;
      this.tags = resp.tags;
      this.precio = resp.precio
      this.categoria = resp.categoria.nombre;
    })
  }

  editar() {

    this.service.editProduct(this.nombre, this.descripcion, this.tags, this.precio, this.categoria, this.url, this.id).subscribe(resp => {
      this.router.navigate([`/admin/categorias/${this.categoria.toLocaleLowerCase()}`])
    })

  }

}
