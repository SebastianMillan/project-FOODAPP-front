import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './ui/home-page/home-page.component';
import { AdminWorkersPageComponent } from './ui/admin-workers-page/admin-workers-page.component';

const routes: Routes = [
  { path: 'home', component: HomePageComponent },
  { path: 'admin-trabajador', component: AdminWorkersPageComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', component: HomePageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
