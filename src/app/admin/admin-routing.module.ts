import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminSpecialComponent } from './admin-special/admin-special.component';

const routes: Routes = [
  {
    path: 'admin-special',
    component: AdminSpecialComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
