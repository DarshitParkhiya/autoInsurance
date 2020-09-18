import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ThemeModule } from '@my-org/theme';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HomeComponent } from './components/home/home.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './components/login/login.component';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [AppComponent, HomeComponent, DashboardComponent, LoginComponent],
  imports: [
    FormsModule,
    BrowserModule,
    HttpClientModule,
    ThemeModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NgbModule,
    CommonModule
    
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
