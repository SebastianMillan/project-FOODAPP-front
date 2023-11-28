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
import { UserDetailPageComponent } from './ui/user-detail-page/user-detail-page.component';
import { ProductEditPageComponent } from './ui/product-edit-page/product-edit-page.component';
import { UserEditPageComponent } from './ui/user-edit-page/user-edit-page.component';
import { CookPageComponent } from './ui/cook-page/cook-page.component';
import { FormEditTrabajadorComponent } from './ui/form-edit-trabajador/form-edit-trabajador.component';
import { ClientSectionComponent } from './sections/client-section/client-section.component';
import { AdminSectionComponent } from './sections/admin-section/admin-section.component';

const routes: Routes = [
  {
    path: 'cliente', component: ClientSectionComponent, children: [
      { path: 'profile', component: UserDetailPageComponent },
      { path: 'profile/edit', component: UserEditPageComponent },
      { path: 'home', component: HomePageComponent },
    ]
  },
  {
    path: 'admin', component: AdminSectionComponent, children: [
      { path: 'categorias/:nombreCategoria', component: AdminVerticalProductListComponent },
      { path: 'trabajador/form', component: FormTrabajadorComponent },
      { path: 'trabajador/edit/form/:id', component: FormEditTrabajadorComponent },
      { path: 'trabajador', component: AdminWorkersPageComponent },
      { path: 'categorias', component: AdminCategoriesPageComponent },
      { path: 'cliente', component: AdminClientsPageComponent },
      { path: 'cliente/:id', component: AdminClientDetailPageComponent },
      { path: 'add/producto', component: AdminProductDetailPageComponent },
      { path: 'edit/producto/:id', component: ProductEditPageComponent },
    ]
  },

  { path: 'cocinero/pedidos', component: CookPageComponent },
  { path: 'login', component: LoginPageComponent },
  { path: 'register', component: RegisterPageComponent },
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: '**', component: HomePageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
