import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { BannerMateriaComponent } from './components/banner-materia/banner-materia.component';
import { CalendarioComponent } from './components/calendario/calendario.component';
import { CrearCuentaComponent } from './components/crear-cuenta/crear-cuenta.component';
import { CrearEstudianteComponent } from './components/crear-estudiante/crear-estudiante.component';
import { CrearDocenteComponent } from './components/crear-docente/crear-docente.component';
import { VistaAlumnoComponent } from './components/vista-alumno/vista-alumno.component';
import { ExamenPendienteComponent } from './components/examen-pendiente/examen-pendiente.component';
import { ExamenActivoItemComponent } from './components/examen-activo-item/examen-activo-item.component';
import { NotasAnterioresComponent } from './components/notas-anteriores/notas-anteriores.component';
import { NotaAnteriorItemComponent } from './components/nota-anterior-item/nota-anterior-item.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    BannerMateriaComponent,
    CalendarioComponent,
    CrearCuentaComponent,
    CrearEstudianteComponent,
    CrearDocenteComponent,
    VistaAlumnoComponent,
    ExamenPendienteComponent,
    ExamenActivoItemComponent,
    NotasAnterioresComponent,
    NotaAnteriorItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
