import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from "./components/login/login.component";
import {CrearCuentaComponent} from "./components/crear-cuenta/crear-cuenta.component";
import {CrearEstudianteComponent} from "./components/crear-estudiante/crear-estudiante.component";
import {CrearDocenteComponent} from "./components/crear-docente/crear-docente.component";
import {VistaAlumnoComponent} from "./components/vista-alumno/vista-alumno.component";

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
  },
  {
    path:"crear-docente",
    component: CrearDocenteComponent
  },
  {
    path:"vista-estudiante",
    component: VistaAlumnoComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
