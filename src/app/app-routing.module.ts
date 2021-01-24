import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BrandlistComponent } from './pages/brand/brandlist/brandlist.component';
import { ModellistComponent } from './pages/model/modellist/modellist.component';
import { VehiclelistComponent } from './pages/vehicle/vehiclelist/vehiclelist.component';

const routes: Routes = [
  { path: 'brandlist', component: BrandlistComponent },
  { path: 'modellist', component: ModellistComponent },
  { path: 'vehiclelist', component: VehiclelistComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
