import { NgModule } from "@angular/core";
import { GenderSelectorComponent } from "../shared/gender-selector/gender-selector.component";
import { MatRadioModule } from '@angular/material/radio';
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";
import { MatTableModule } from "@angular/material/table";
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
    imports:[
        MatRadioModule,
        FormsModule,
        ReactiveFormsModule,
        MatFormFieldModule,
        MatInputModule,
        MatTableModule,
        MatCardModule,
        MatButtonModule,
        CommonModule
    ],
    declarations: [GenderSelectorComponent],
    exports:[GenderSelectorComponent]
})

export class SharedModule {}
