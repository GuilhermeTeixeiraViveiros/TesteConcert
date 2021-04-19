import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MapasComponent } from './mapas/mapas.component';
const mapasRoutes: Routes = [
    {
        path: "",
        component: MapasComponent
    }
]

@NgModule({
    imports: [RouterModule.forChild(mapasRoutes)],
    exports: [RouterModule]
})
export class MapasRoutingModule { }
