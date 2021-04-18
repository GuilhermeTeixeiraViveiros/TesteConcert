import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormularioReativoCrudComponent } from 'src/app/views/formulario-reativo-crud/formulario-reativo-crud.component';
import { FormularioReativoComponent } from './formulario-reativo-create/formulario-reativo.component';
import { FormularioReativoDeleteComponent } from './formulario-reativo-delete/formulario-reativo-delete.component';
import { FormularioReativoUpdateComponent } from './formulario-reativo-update/formulario-reativo-update.component';

const colaboradoresRoutes: Routes = [
  {
    path: "",
    component: FormularioReativoCrudComponent
  },
  {
    path: "create",
    component: FormularioReativoComponent
  },
  {
    path: "update/:id",
    component: FormularioReativoUpdateComponent
  },
  {
    path: "delete/:id",
    component: FormularioReativoDeleteComponent
  }
 ]

@NgModule({
  imports: [RouterModule.forChild(colaboradoresRoutes)],
  exports: [RouterModule]
})

export class FormularioReactivoRoutingModule { }
