import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { MainAdminComponent } from './components/main-admin/main-admin.component';
import { MainUserComponent } from './components/main-user/main-user.component';
import { FormsModule, NgForm, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { UserListComponent } from './components/user-list/user-list.component';
import { UpdatePasswordAdminComponent } from './components/update-password-admin/update-password-admin.component';
import { ManageBooksComponent } from './components/manage-books/manage-books.component';
import { NgbModal, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ViewBooksComponent } from './components/view-books/view-books.component';
import { UserIssuesComponent } from './components/user-issues/user-issues.component';
import { PasswordChangeComponent } from './components/password-change/password-change.component';
import { AdminIssuesComponent } from './components/admin-issues/admin-issues.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    MainAdminComponent,
    MainUserComponent,
    UserListComponent,
    UpdatePasswordAdminComponent,
    ManageBooksComponent,
    ViewBooksComponent,
    UserIssuesComponent,
    PasswordChangeComponent,
    AdminIssuesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    NgbModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
