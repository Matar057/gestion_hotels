import { NgModule } from '@angular/core';
import { Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { ListHotelsComponent } from './list-hotels/list-hotels.component';
import { ForgetPasswordComponent } from './forget-password/forget-password.component';
import { AddHotelComponent } from './add-hotels/add-hotels.component';
import { Router } from 'express';
import { Module } from 'module';

const routes: Routes = [
  /**{path: "register", component: RegisterComponent},
  {path: "login", component: LoginComponent},
  {path: "dashboard", component: DashboardComponent},
  {path: "forget-password", component: ForgetPasswordComponent},
  {path: "liste-hotels", component: ListHotelsComponent},
  {path: "add-hotel", component: AddHotelsComponent},**/
  {path: '', redirectTo: '/login', pathMatch:'full'}
];

@NgModule({
  declarations: [
    AppComponent,
    AddHotelComponent,
    DashboardComponent,
    RegisterComponent,
    LoginComponent,
    ListHotelsComponent,
    ForgetPasswordComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
