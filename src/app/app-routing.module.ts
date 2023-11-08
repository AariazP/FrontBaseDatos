import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from "./components/login/login.component";
import {CrearCuentaComponent} from "./components/crear-cuenta/crear-cuenta.component";
import {CrearEstudianteComponent} from "./components/crear-estudiante/crear-estudiante.component";
import {CrearDocenteComponent} from "./components/crear-docente/crear-docente.component";
import {VistaAlumnoComponent} from "./components/vista-alumno/vista-alumno.component";
import {VistaProfesorComponent} from "./components/vista-profesor/vista-profesor.component";
import { HomeReportesComponent } from './components/home-reportes/home-reportes.component';

const routes: Routes = [
  {
    path:"",
    component: LoginComponent
  },
  {
    path:"home",
    component: HomeReportesComponent 
  },
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
  },
  {
    path:"vista-profesor",
    component: VistaProfesorComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
