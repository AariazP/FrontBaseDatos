import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { BannerMateriaComponent } from './components/banner-materia/banner-materia.component';
import { CalendarioComponent } from './components/calendario/calendario.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    BannerMateriaComponent,
    CalendarioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
