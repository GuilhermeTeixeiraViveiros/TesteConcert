import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { LoginRoutingModule } from "./login-routing.module";
import { LoginComponent } from './login.component' 
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";
import { NgxSpinnerModule } from 'ngx-spinner'
@NgModule({
    imports: [
        CommonModule, 
        LoginRoutingModule,
        MatCardModule,
        MatButtonModule,
        MatFormFieldModule,
        MatInputModule,
        FormsModule,
        NgxSpinnerModule
    ],
    declarations:[LoginComponent]
})

export class LoginModule {}