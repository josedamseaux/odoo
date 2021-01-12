import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AprendeComponent } from './componentes/aprende/aprende.component';
import { ComunidadComponent } from './componentes/comunidad/comunidad.component';
import { HomeComponent } from './componentes/home/home.component';
import { PruebaloComponent } from './componentes/pruebalo/pruebalo.component';
import { RegistroComponent } from './componentes/registro/registro.component';
import { TarifaComponent } from './componentes/tarifa/tarifa.component';
import { TourComponent } from './componentes/tour/tour.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'registro', component: RegistroComponent },
  { path: 'tour', component: TourComponent },
  { path: 'pruebalo', component: PruebaloComponent },
  { path: 'tarifa', component: TarifaComponent },
  { path: 'aprende', component: AprendeComponent },
  { path: 'comunidad', component: ComunidadComponent },


  { path: '**', pathMatch: 'full', redirectTo: 'home' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
