import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { AllBlogsComponent } from './all-blogs/all-blogs.component';
import { DisplayBlogsComponent } from './display-blogs/display-blogs.component';
import { CreateBlogComponent } from './create-blog/create-blog.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ManageUsersComponent } from './manage-users/manage-users.component';
import { authGuard, loginGuard } from './guards/auth.guard';


const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'dashboard',
    component: DashboardComponent,
    canActivate: [loginGuard]
  },
  {
    path: 'all-blogs',
    component: AllBlogsComponent,
    canActivate: [loginGuard]
  },
  {
    path: 'my-blogs',
    component: DisplayBlogsComponent,
    canActivate: [loginGuard]
  },
  {
    path: 'create-blog',
    component: CreateBlogComponent,
    canActivate: [loginGuard]
  },
  {
    path: 'admin',
    loadChildren: () => import('./admin/admin.module').then((mod) => mod.AdminModule)
  },
  {
    path: 'manageusers',
    component: ManageUsersComponent,
    canActivate: [authGuard]
  },
  {
    path: '',
    redirectTo: '/login',
    pathMatch: 'full'
  },{
    path: "**",
    component: NotFoundComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const routingComponents = [DashboardComponent,ManageUsersComponent,CreateBlogComponent,DisplayBlogsComponent,AllBlogsComponent,LoginComponent]