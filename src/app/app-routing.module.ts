import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BrandeditComponent } from './pages/brand/brandedit/brandedit.component';

import { BrandlistComponent } from './pages/brand/brandlist/brandlist.component';
import { ModeleditComponent } from './pages/model/modeledit/modeledit.component';
import { ModellistComponent } from './pages/model/modellist/modellist.component';
import { VehicleeditComponent } from './pages/vehicle/vehicleedit/vehicleedit.component';
import { VehiclelistComponent } from './pages/vehicle/vehiclelist/vehiclelist.component';

const routes: Routes = [
  { path: 'brandlist', component: BrandlistComponent },
  { path: 'brandedit', component: BrandeditComponent },
  { path: 'modellist', component: ModellistComponent },
  { path: 'modeledit', component: ModeleditComponent },
  { path: 'vehiclelist', component: VehiclelistComponent },
  { path: 'vehicleedit', component: VehicleeditComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
