import { Routes } from "@angular/router";
import { HomeComponent } from '../platillos/home/home.component';
import { PlatillosDetalleComponent } from '../platillos/platillos-detalle/platillos-detalle.component';
import { IngredientesListaComponent } from '../platillos/ingredientes-lista/ingredientes-lista.component';
import { IngredientesDetalleComponent } from '../platillos/ingredientes-detalle/ingredientes-detalle.component';
import { PlatillosListaComponent } from "../platillos/platillos-lista/platillos-lista.component";

export const dashboardRoutes: Routes = [
    {
        path: '', component:HomeComponent
    },
    {
        path: 'platillos-lista', component:PlatillosListaComponent
    },
    {
        path: 'inicio', component:HomeComponent
    },
    {
        path: 'platillo-detalle', component:PlatillosDetalleComponent
    },
    {
        path: 'ingrediente-lista', component:IngredientesListaComponent
    },
    {
        path: 'ingrediente-detalle', component:IngredientesDetalleComponent
    },
]