import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ColaboradorCrudComponent} from '../../views/colaborador-crud/colaborador-crud.component';
import { ColaboradorCreateComponent } from './colaborador-create/colaborador-create.component';
import { ColaboradorUpdateComponent } from './colaborador-update/colaborador-update.component';
import { ColaboradorDeleteComponent } from './colaborador-delete/colaborador-delete.component';

const colaboradoresRoutes: Routes = [
  {
    path: "colaboradores",
    component: ColaboradorCrudComponent
  },
  {
    path: "colaboradores/create",
    component: ColaboradorCreateComponent
  },
  {
    path: "colaboradores/update/:id",
    component: ColaboradorUpdateComponent
  },
  {
    path: "colaboradores/delete/:id",
    component: ColaboradorDeleteComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(colaboradoresRoutes)],
  exports: [RouterModule]
})
export class ColaboradoresRoutingModule { }
