import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './views/home/home.component';
const routes: Routes = [
  {
    path: "",
    component: HomeComponent
  },
  {
    path: "colaboradores",
    loadChildren: () => import('./components/colaboradores/colaboradores.module').then(m => m.ColaboradoresModule)
  },
  {
    path: "login",
    loadChildren: () => import('./components/login/login.module').then(m => m.LoginModule)
  }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
