import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule,routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CreateBlogComponent } from './create-blog/create-blog.component';
import { DisplayBlogsComponent } from './display-blogs/display-blogs.component';
import { AllBlogsComponent } from './all-blogs/all-blogs.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SearchComponent } from './search/search.component';
import { ManageUsersComponent } from './manage-users/manage-users.component';
import { SharedModule } from './shared.module';
import { SidebarComponent } from './sidebar/sidebar.component';

// async validator
// directives
// observables, subject, behavioral subject 


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    routingComponents,
    CreateBlogComponent,
    DisplayBlogsComponent,
    AllBlogsComponent,
    NotFoundComponent,
    SidebarComponent,
    SearchComponent,
    ManageUsersComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    NgbModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
