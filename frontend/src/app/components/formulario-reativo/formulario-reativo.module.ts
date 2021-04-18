import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { FormularioReactivoRoutingModule } from "./formulario-reativo-routing-module";
import { FormularioReativoComponent } from "./formulario-reativo.component";
import { FormDebugComponent } from '../form-debug/form-debug.component';
import { HttpClientModule } from "@angular/common/http";
import { FormularioReativoService } from "./formulario-reativo.service";

@NgModule({
    imports:[
        CommonModule,
        ReactiveFormsModule,
        FormularioReactivoRoutingModule,
        HttpClientModule
    ],
    declarations: [
        FormularioReativoComponent,
        FormDebugComponent
    ],
    providers: [FormularioReativoService]
})

export class FormularioReativoModule {}