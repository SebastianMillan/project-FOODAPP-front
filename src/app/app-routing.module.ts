import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './ui/home-page/home-page.component';
import { AdminCategoriesPageComponent } from './ui/admin-categories-page/admin-categories-page.component';
import { LoginPageComponent } from './ui/login-page/login-page.component';
import { RegisterPageComponent } from './ui/register-page/register-page.component';
import { AdminWorkersPageComponent } from './ui/admin-workers-page/admin-workers-page.component';
import { AdminVerticalProductListComponent } from './components/admin-vertical-product-list/admin-vertical-product-list.component';
import { AdminClientDetailPageComponent } from './ui/admin-client-detail-page/admin-client-detail-page.component';
import { FormTrabajadorComponent } from './ui/form-trabajador/form-trabajador.component';
import { AdminClientsPageComponent } from './ui/admin-clients-page/admin-clients-page.component';
import { AdminProductDetailPageComponent } from './ui/admin-product-detail-page/admin-product-detail-page.component';

const routes: Routes = [
  { path: 'home', component: HomePageComponent },
  { path: 'admin/categorias/:nombreCategoria', component: AdminVerticalProductListComponent },
  { path: 'admin/trabajador/form', component: FormTrabajadorComponent },
  { path: 'admin/trabajador', component: AdminWorkersPageComponent },
  { path: 'admin/categorias', component: AdminCategoriesPageComponent },
  { path: 'login', component: LoginPageComponent },
  { path: 'admin/cliente', component: AdminClientsPageComponent },
  { path: 'admin/cliente/:id', component: AdminClientDetailPageComponent },
  { path: 'register', component: RegisterPageComponent },
  { path: 'admin/add/producto', component: AdminProductDetailPageComponent },
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: '**', component: HomePageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
