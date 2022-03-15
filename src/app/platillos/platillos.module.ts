import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PlatillosRoutingModule } from './platillos-routing.module';
import { PlatillosListaComponent } from './platillos-lista/platillos-lista.component';
import { PlatillosDetalleComponent } from './platillos-detalle/platillos-detalle.component';
import { IngredientesListaComponent } from './ingredientes-lista/ingredientes-lista.component';
import { IngredientesDetalleComponent } from './ingredientes-detalle/ingredientes-detalle.component';
import { HomeComponent } from './home/home.component';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { SharedModule } from '../shared/shared.module';
import { DashboardRoutesModule } from '../dashboard/dashboard-routes.module';


@NgModule({
  declarations: [
    PlatillosListaComponent,
    PlatillosDetalleComponent,
    IngredientesListaComponent,
    IngredientesDetalleComponent,
    HomeComponent,
    DashboardComponent
  ],
  imports: [
    CommonModule,
    PlatillosRoutingModule,
    SharedModule,
    DashboardRoutesModule
  ]
})
export class PlatillosModule { }
