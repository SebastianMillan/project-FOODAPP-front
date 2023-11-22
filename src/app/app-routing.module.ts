import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminWorkersPageComponent } from './ui/admin-workers-page/admin-workers-page.component';

const routes: Routes = [
  { path: "trabajador", component: AdminWorkersPageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
