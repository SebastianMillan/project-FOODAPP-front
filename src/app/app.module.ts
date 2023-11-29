import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HorizontalProductListComponent } from './components/horizontal-product-list/horizontal-product-list.component';
import { VerticalCategoryWithProductListComponent } from './components/vertical-category-with-product-list/vertical-category-with-product-list.component';
import { VerticalProductListComponent } from './components/vertical-product-list/vertical-product-list.component';
import { ProductCardV1Component } from './components/product-card-v1/product-card-v1.component';
import { ProductCardV2Component } from './components/product-card-v2/product-card-v2.component';
import { MonthProductComponent } from './components/month-product/month-product.component';
import { ClientNavbarComponent } from './components/client-navbar/client-navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { VerticalOrderListComponent } from './components/vertical-order-list/vertical-order-list.component';
import { OrderRowComponent } from './components/order-row/order-row.component';
import { VerticalLineOrderListComponent } from './components/vertical-line-order-list/vertical-line-order-list.component';
import { LineOrderRowComponent } from './components/line-order-row/line-order-row.component';
import { WorkerNavbarComponent } from './components/worker-navbar/worker-navbar.component';
import { AdminNavbarComponent } from './components/admin-navbar/admin-navbar.component';
import { VerticalCategoryListComponent } from './components/vertical-category-list/vertical-category-list.component';
import { CategoryRowComponent } from './components/category-row/category-row.component';
import { AdminVerticalProductListComponent } from './components/admin-vertical-product-list/admin-vertical-product-list.component';
import { VerticalClientListComponent } from './components/vertical-client-list/vertical-client-list.component';
import { ClientRowComponent } from './components/client-row/client-row.component';
import { ProductRowComponent } from './components/product-row/product-row.component';
import { VerticalWorkerListComponent } from './components/vertical-worker-list/vertical-worker-list.component';
import { WorkerRowComponent } from './components/worker-row/worker-row.component';
import { VerticalDeliveryListComponent } from './components/vertical-delivery-list/vertical-delivery-list.component';
import { VerticalCookListComponent } from './components/vertical-cook-list/vertical-cook-list.component';
import { DeliveryRowComponent } from './components/delivery-row/delivery-row.component';
import { CookRowComponent } from './components/cook-row/cook-row.component';
import { HomePageComponent } from './ui/home-page/home-page.component';
import { LoginPageComponent } from './ui/login-page/login-page.component';
import { RegisterPageComponent } from './ui/register-page/register-page.component';
import { MenuPageComponent } from './ui/menu-page/menu-page.component';
import { OrderDetailPageComponent } from './ui/order-detail-page/order-detail-page.component';
import { ClientOrdersPageComponent } from './ui/client-orders-page/client-orders-page.component';
import { AdminWorkerDetailPageComponent } from './ui/admin-worker-detail-page/admin-worker-detail-page.component';
import { AdminOrdersPageComponent } from './ui/admin-orders-page/admin-orders-page.component';
import { AdminCategoriesPageComponent } from './ui/admin-categories-page/admin-categories-page.component';
import { AdminProductsPageComponent } from './ui/admin-products-page/admin-products-page.component';
import { AdminProductDetailPageComponent } from './ui/admin-product-detail-page/admin-product-detail-page.component';
import { AdminClientsPageComponent } from './ui/admin-clients-page/admin-clients-page.component';
import { AdminClientDetailPageComponent } from './ui/admin-client-detail-page/admin-client-detail-page.component';
import { AdminWorkersPageComponent } from './ui/admin-workers-page/admin-workers-page.component';
import { DeliveryPageComponent } from './ui/delivery-page/delivery-page.component';
import { CookPageComponent } from './ui/cook-page/cook-page.component';
import { HttpClientModule, provideHttpClient, withFetch } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { FormTrabajadorComponent } from './ui/form-trabajador/form-trabajador.component';

import { BotonDeteleTrabajadorComponent } from './components/boton-detele-trabajador/boton-detele-trabajador.component';

import { UserDetailPageComponent } from './ui/user-detail-page/user-detail-page.component';
import { ProductEditPageComponent } from './ui/product-edit-page/product-edit-page.component';

import { UserEditPageComponent } from './ui/user-edit-page/user-edit-page.component';
import { FormEditTrabajadorComponent } from './ui/form-edit-trabajador/form-edit-trabajador.component';
import { ModalComponent } from './components/modal/modal.component';
import { ClientSectionComponent } from './sections/client-section/client-section.component';
import { BotonEditTrabajadorComponent } from './components/boton-edit-trabajador/boton-edit-trabajador.component';
import { AdminSectionComponent } from './sections/admin-section/admin-section.component';
import { ModalAdminComponent } from './components/modal-admin/modal-admin.component';
import { CocineroSectionComponent } from './sections/cocinero-section/cocinero-section.component';
import { TrabajadorNavbarComponent } from './components/trabajador-navbar/trabajador-navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    HorizontalProductListComponent,
    VerticalCategoryWithProductListComponent,
    VerticalProductListComponent,
    ProductCardV1Component,
    ProductCardV2Component,
    MonthProductComponent,
    ClientNavbarComponent,
    FooterComponent,
    VerticalOrderListComponent,
    OrderRowComponent,
    VerticalLineOrderListComponent,
    LineOrderRowComponent,
    WorkerNavbarComponent,
    AdminNavbarComponent,
    VerticalCategoryListComponent,
    CategoryRowComponent,
    AdminVerticalProductListComponent,
    VerticalClientListComponent,
    ClientRowComponent,
    ProductRowComponent,
    VerticalWorkerListComponent,
    WorkerRowComponent,
    VerticalDeliveryListComponent,
    VerticalCookListComponent,
    DeliveryRowComponent,
    CookRowComponent,
    HomePageComponent,
    LoginPageComponent,
    RegisterPageComponent,
    MenuPageComponent,
    OrderDetailPageComponent,
    ClientOrdersPageComponent,
    AdminWorkerDetailPageComponent,
    AdminOrdersPageComponent,
    AdminCategoriesPageComponent,
    AdminProductsPageComponent,
    AdminProductDetailPageComponent,
    AdminClientsPageComponent,
    AdminClientDetailPageComponent,
    AdminWorkersPageComponent,
    DeliveryPageComponent,
    CookPageComponent,
    FormTrabajadorComponent,
    BotonDeteleTrabajadorComponent,
    UserDetailPageComponent,
    ProductEditPageComponent,
    UserEditPageComponent,
    UserEditPageComponent,

    FormEditTrabajadorComponent,
    ModalComponent,
    ClientSectionComponent,
    BotonEditTrabajadorComponent,
    AdminSectionComponent,
    ModalAdminComponent,
    CocineroSectionComponent,
    TrabajadorNavbarComponent




  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [provideHttpClient(withFetch())],
  bootstrap: [AppComponent]
})
export class AppModule { }
