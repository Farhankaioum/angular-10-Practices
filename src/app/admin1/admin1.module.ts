import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Admin1RoutingModule } from './admin1-routing.module';
import { LoginComponent } from './login/login.component';
import { ListComponent } from './list/list.component';


@NgModule({
  declarations: [LoginComponent, ListComponent],
  imports: [
    CommonModule,
    Admin1RoutingModule
  ]
})
export class Admin1Module { }
