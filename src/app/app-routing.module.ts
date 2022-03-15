import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { RegistroComponent } from './auth/registro/registro.component';

const routes: Routes = [
  {
    path:'login', component: LoginComponent
  },
  {
    path:'register', component: RegistroComponent
  },
  {
    path:'',
    loadChildren: () => import('./platillos/platillos.module')
                  .then(m => m.PlatillosModule)
  },
  {
    path:'**', redirectTo:'login'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
