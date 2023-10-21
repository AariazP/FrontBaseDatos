import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from "./components/login/login.component";
import {CrearCuentaComponent} from "./components/crear-cuenta/crear-cuenta.component";
import {CrearEstudianteComponent} from "./components/crear-estudiante/crear-estudiante.component";

const routes: Routes = [
  {
    path:"login",
    component: LoginComponent
  },
  {
    path:"crear-cuenta",
    component: CrearCuentaComponent
  },
  {
    path:"crear-estudiante",
    component:CrearEstudianteComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
