import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MapasComponent } from './mapas/mapas.component';
import { MapasRoutingModule } from './mapas.routing.module'
import { AgmCoreModule } from '@agm/core'
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";

@NgModule({
  declarations: [
    MapasComponent
  ],
  imports: [
    CommonModule,
    MapasRoutingModule,
    AgmCoreModule.forRoot({ apiKey: 'AIzaSyCBkjZxrSOsrMj2xrsIZzkoGlFPNHf6eTA' }),
    MatCardModule,
    MatButtonModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule
  ]
})
export class MapasModule { }