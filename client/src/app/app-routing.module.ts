import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from "./components/home/home.component";
import { DevelopersComponent } from './components/developers/developers.component';
import { QueAnsComponent } from './components/que-ans/que-ans.component';
import { RegisterComponent } from "./components/register/register.component";
import { LoginComponent } from "./components/login/login.component"
import { UnknownComponent } from "./components/unknown/unknown.component";

import { AuthGuardService as AuthGuard} from "./services/auth-guard.service";

const routes: Routes = [
  {path: "login", component: LoginComponent},
  {path: "register", component: RegisterComponent},
  {path: "", component: HomeComponent,canActivate:[AuthGuard]},
  {path: "developers", component: DevelopersComponent,canActivate:[AuthGuard]},
  {path: "QueAns", component: QueAnsComponent,canActivate:[AuthGuard]},
  {path: "**", component:UnknownComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
