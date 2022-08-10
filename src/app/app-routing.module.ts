import { importProvidersFrom, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminIssuesComponent } from './components/admin-issues/admin-issues.component';
import { LoginComponent } from './components/login/login.component';
import { MainAdminComponent } from './components/main-admin/main-admin.component';
import { MainUserComponent } from './components/main-user/main-user.component';
import { ManageBooksComponent } from './components/manage-books/manage-books.component';
import { PasswordChangeComponent } from './components/password-change/password-change.component';
import { UpdatePasswordAdminComponent } from './components/update-password-admin/update-password-admin.component';
import { UserIssuesComponent } from './components/user-issues/user-issues.component';
import { UserListComponent } from './components/user-list/user-list.component';
import { ViewBooksComponent } from './components/view-books/view-books.component';

const routes: Routes = [
  {path:'', component:LoginComponent},

  {path:'main-admin-component', component:MainAdminComponent,

  children:[
    {path: 'user-list', component:UserListComponent},
    {path: 'update-password-admin/:uid', component:UpdatePasswordAdminComponent},
    {path: 'manage-books', component:ManageBooksComponent},
    {path: 'admin-issues/:uid', component:AdminIssuesComponent}
  ]
},
  {path:'main-user-component', component:MainUserComponent,

  children:[
    {path: 'view-books', component:ViewBooksComponent},
    {path: 'user-issues', component:UserIssuesComponent},
    {path: 'password-change', component:PasswordChangeComponent}
  ]
},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
