import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ForgetPasswordComponent } from './forget-password/forget-password.component';
import { ListHotelsComponent } from './list-hotels/list-hotels.component';
import { AddHotelComponent } from './add-hotels/add-hotels.component';


const routes: Routes = [
  {path: "register", component: RegisterComponent},
  {path: "login", component: LoginComponent},
  {path: "dashboard", component: DashboardComponent},
  {path: "forget-password", component: ForgetPasswordComponent},
  {path: "liste-hotels", component: ListHotelsComponent},
  {path: "add-hotel", component: AddHotelComponent},
  {path: '', redirectTo: '/liste-hotels', pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
