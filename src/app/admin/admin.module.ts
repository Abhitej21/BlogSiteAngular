import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminSpecialComponent } from './admin-special/admin-special.component';
import { SharedModule } from '../shared.module';


@NgModule({
  declarations: [
    AdminSpecialComponent,
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    SharedModule
  ]
})
export class AdminModule { }
