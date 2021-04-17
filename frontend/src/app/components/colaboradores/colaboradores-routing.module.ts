import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ColaboradorCrudComponent} from '../../views/colaborador-crud/colaborador-crud.component';
import { ColaboradorCreateComponent } from './colaborador-create/colaborador-create.component';
import { ColaboradorUpdateComponent } from './colaborador-update/colaborador-update.component';
import { ColaboradorDeleteComponent } from './colaborador-delete/colaborador-delete.component';

const colaboradoresRoutes: Routes = [
  {
    path: "",
    component: ColaboradorCrudComponent
  },
      {
        path: "create",
        component: ColaboradorCreateComponent
      },
      {
        path: "update/:id",
        component: ColaboradorUpdateComponent
      },
      {
        path: "delete/:id",
        component: ColaboradorDeleteComponent
      }  
    ]

@NgModule({
  imports: [RouterModule.forChild(colaboradoresRoutes)],
  exports: [RouterModule]
})
export class ColaboradoresRoutingModule { }
