import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuardService } from './components/guards/auth-guard.service';
import { HomeComponent } from './views/home/home.component';
const routes: Routes = [
  {
    path: "",
    component: HomeComponent
  },
  {
    path: "colaboradores",
    loadChildren: () => import('./components/colaboradores/colaboradores.module').then(m => m.ColaboradoresModule),
    canActivate: [AuthGuardService],
  },
  {
    path: "login",
    loadChildren: () => import('./components/login/login.module').then(m => m.LoginModule)
  },
  {
    path: "formulario-reativo",
    loadChildren: () => import('./components/formularioReativo/formulario-reativo.module').then(m => m.FormularioReativoModule),
    canActivate: [AuthGuardService]
  },
  {
    path: "mapa",
    loadChildren: () => import('./components/mapas/mapas.module').then(m => m.MapasModule),
    canActivate: [AuthGuardService]
  }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
