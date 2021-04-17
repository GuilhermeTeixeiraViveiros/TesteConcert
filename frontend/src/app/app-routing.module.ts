import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from './views/home/home.component';
import {ColaboradorCrudComponent} from './views/colaborador-crud/colaborador-crud.component';
import { ColaboradorCreateComponent } from './components/products/colaborador-create/colaborador-create.component';
import { ColaboradorUpdateComponent } from './components/products/colaborador-update/colaborador-update.component';
import { ColaboradorDeleteComponent } from './components/products/colaborador-delete/colaborador-delete.component';

const routes: Routes = [
  {
    path: "",
    component: HomeComponent
  },
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
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
