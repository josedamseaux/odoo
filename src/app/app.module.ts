import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './componentes/home/home.component';
import { RegistroComponent } from './componentes/registro/registro.component';
import {  RouterModule } from '@angular/router';
import { TourComponent } from './componentes/tour/tour.component';
import { TarifaComponent } from './componentes/tarifa/tarifa.component';
import { AprendeComponent } from './componentes/aprende/aprende.component';
import { ComunidadComponent } from './componentes/comunidad/comunidad.component';
import { PruebaloComponent } from './componentes/pruebalo/pruebalo.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    RegistroComponent,
    TourComponent,
    TarifaComponent,
    AprendeComponent,
    ComunidadComponent,
    PruebaloComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
