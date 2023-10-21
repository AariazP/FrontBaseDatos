import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from "./components/login/login.component";
import {CrearCuentaComponent} from "./components/crear-cuenta/crear-cuenta.component";

const routes: Routes = [
  {
    path:"login",
    component: LoginComponent
  },
  {
    path:"crear-cuenta",
    component: CrearCuentaComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
