import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { DashboardComponent } from './dashboard.component';
import { dashboardRoutes } from './dashboards.routes';

const rutasHijas: Routes = [
    {
        path:'',
        component: DashboardComponent,
        children: dashboardRoutes
    }
]

@NgModule({
    declarations: [],
    imports:[
        RouterModule.forChild(rutasHijas)
    ],
    exports:[
        RouterModule
    ]
})
export class DashboardRoutesModule { }