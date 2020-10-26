import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from "./components/home/home.component";
import { DevelopersComponent } from './components/developers/developers.component';
import { QueAnsComponent } from './components/que-ans/que-ans.component';
import { RegisterComponent } from "./components/register/register.component";
import { LoginComponent } from "./components/login/login.component"



const routes: Routes = [
  {path: "home", component: HomeComponent},
  {path: "developers", component: DevelopersComponent},
  {path: "QueAns", component: QueAnsComponent},
  {path: "register", component: RegisterComponent},
  {path: "login", component: LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
