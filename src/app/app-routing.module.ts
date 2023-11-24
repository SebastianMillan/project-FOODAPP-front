import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './ui/home-page/home-page.component';
import { CategoryRowComponent } from './components/category-row/category-row.component';
import { AdminCategoriesPageComponent } from './ui/admin-categories-page/admin-categories-page.component';

const routes: Routes = [
  { path: 'home', component: HomePageComponent },
  { path: 'admin/categorias', component: AdminCategoriesPageComponent},
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', component: HomePageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
