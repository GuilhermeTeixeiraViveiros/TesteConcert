import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";
import { MatPaginatorModule } from "@angular/material/paginator";
import { MatTableModule } from "@angular/material/table";
import { MatSortModule } from '@angular/material/sort';
import { MatRadioModule } from '@angular/material/radio';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { ColaboradorCrudComponent } from "src/app/views/colaborador-crud/colaborador-crud.component";
import { ColaboradorCreateComponent } from "./colaborador-create/colaborador-create.component";
import { ColaboradorDeleteComponent } from "./colaborador-delete/colaborador-delete.component";
import { ColaboradorReadComponent } from "./colaborador-read/colaborador-read.component";
import { ColaboradorUpdateComponent } from "./colaborador-update/colaborador-update.component";
import { ColaboradorService } from "./colaborador.service";
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { ColaboradoresRoutingModule } from "./colaboradores-routing.module";
import { SharedModule } from "../shared/shared.module";
@NgModule({
    imports:[
        CommonModule,
        HttpClientModule,
        FormsModule,
        MatFormFieldModule,
        MatInputModule,
        MatTableModule,
        MatPaginatorModule,
        MatSortModule,
        MatRadioModule,
        MatCheckboxModule,
        MatCardModule,
        MatButtonModule,
        ColaboradoresRoutingModule,
        SharedModule
    ],
    declarations: [    
        ColaboradorCrudComponent,
        ColaboradorCreateComponent,
        ColaboradorReadComponent,
        ColaboradorUpdateComponent,
        ColaboradorDeleteComponent
    ],
    providers: [
        ColaboradorService
    ]
})

export class ColaboradoresModule {}
