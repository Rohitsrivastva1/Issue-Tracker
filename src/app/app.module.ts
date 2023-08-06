import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms'; // Import ReactiveFormsModule
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { IssueListComponent } from './issue-list/issue-list.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { IssueFormComponent } from './issue-form/issue-form.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { IssueCreateComponent } from './issue-create/issue-create.component';
import { IssueDetailsComponent } from './issue-details/issue-details.component';
import { FormsModule } from '@angular/forms'; // Import FormsModule

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    IssueListComponent,
    DashboardComponent,
    IssueFormComponent,
    SidenavComponent,
    IssueCreateComponent,
    IssueDetailsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatIconModule,
    FormsModule,
    MatSidenavModule,
    HttpClientModule, // Make sure this module is imported
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
