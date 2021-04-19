import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MapasComponent } from './mapas/mapas.component';
import { MapasRoutingModule } from './mapas.routing.module'
import { AgmCoreModule } from '@agm/core'

@NgModule({
  declarations: [
    MapasComponent
  ],
  imports: [
    CommonModule,
    MapasRoutingModule,
    AgmCoreModule.forRoot({apiKey:'AIzaSyCBkjZxrSOsrMj2xrsIZzkoGlFPNHf6eTA'})
  ]
})
export class MapasModule { }
