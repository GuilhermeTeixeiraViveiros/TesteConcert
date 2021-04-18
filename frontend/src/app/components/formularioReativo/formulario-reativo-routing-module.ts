import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormularioReativoCrudComponent } from 'src/app/views/formulario-reativo-crud/formulario-reativo-crud.component';
import { FormularioReativoComponent } from './formulario-reativo-create/formulario-reativo.component';

const colaboradoresRoutes: Routes = [
  {
    path: "",
    component: FormularioReativoCrudComponent
  },
  {
    path: "create",
    component: FormularioReativoComponent
  }
 ]

@NgModule({
  imports: [RouterModule.forChild(colaboradoresRoutes)],
  exports: [RouterModule]
})

export class FormularioReactivoRoutingModule { }
