import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormularioReativoComponent } from './formulario-reativo.component';

const colaboradoresRoutes: Routes = [
  {
    path: "",
    component: FormularioReativoComponent
  }
 ]

@NgModule({
  imports: [RouterModule.forChild(colaboradoresRoutes)],
  exports: [RouterModule]
})

export class FormularioReactivoRoutingModule { }
