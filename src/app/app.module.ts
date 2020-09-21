import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {UsersModule} from './users/users.module'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserListComponent } from './user-list/user-list.component';
import {FormsModule} from '@angular/forms';
import{ReactiveFormsModule} from '@angular/forms'
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import {MatButtonModule} from '@angular/material/button'
import {MatSliderModule} from '@angular/material/slider';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { CustomStyleDirectiveDirective } from './custom-style-directive.directive'
import {HttpClientModule} from '@angular/common/http'
import{AdminModule} from './admin/admin.module'
import {UserModule} from './user/user.module'
import { AdminlistComponent } from './adminlist/adminlist.component';
import { UserlistComponent } from './userlist/userlist.component';

@NgModule({
  declarations: [
    AppComponent,
    UserListComponent,
    HeaderComponent,
    FooterComponent,
    PageNotFoundComponent,
    CustomStyleDirectiveDirective,
    AdminlistComponent,
    UserlistComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    UsersModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatSliderModule,
    HttpClientModule,
    AdminModule,
    UserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

