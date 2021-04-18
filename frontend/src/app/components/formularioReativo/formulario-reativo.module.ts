import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { FormularioReactivoRoutingModule } from "./formulario-reativo-routing-module";
import { FormularioReativoComponent } from "./formulario-reativo-create/formulario-reativo.component";
import { FormDebugComponent } from '../form-debug/form-debug.component';
import { HttpClientModule } from "@angular/common/http";
import { FormularioReativoService } from "./formulario-reativo.service";

import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";
import { MatTableModule } from "@angular/material/table";
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { FormularioReativoReadComponent } from './formulario-reativo-read/formulario-reativo-read.component';
import { FormularioReativoCrudComponent } from '../../views/formulario-reativo-crud/formulario-reativo-crud.component';

@NgModule({
    imports: [
        CommonModule,
        ReactiveFormsModule,
        FormularioReactivoRoutingModule,
        HttpClientModule,
        MatFormFieldModule,
        MatInputModule,
        MatTableModule,
        MatCardModule,
        MatButtonModule,
    ],
    declarations: [
        FormularioReativoComponent,
        FormDebugComponent,
        FormularioReativoReadComponent,
        FormularioReativoCrudComponent
    ],
    providers: [FormularioReativoService]
})

export class FormularioReativoModule { }