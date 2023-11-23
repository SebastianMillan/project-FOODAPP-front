import { Component, Input } from '@angular/core';
import { CategoriaRowResponse } from '../../models/categoria-row.interface';

@Component({
  selector: 'app-category-row',
  templateUrl: './category-row.component.html',
  styleUrl: './category-row.component.css'
})
export class CategoryRowComponent {

  @Input() categoria: CategoriaRowResponse | undefined;
}
