import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BrandaddComponent } from './pages/brand/brandadd/brandadd.component';
import { BrandeditComponent } from './pages/brand/brandedit/brandedit.component';

import { BrandlistComponent } from './pages/brand/brandlist/brandlist.component';
import { ModeladdComponent } from './pages/model/modeladd/modeladd.component';
import { ModeleditComponent } from './pages/model/modeledit/modeledit.component';
import { ModellistComponent } from './pages/model/modellist/modellist.component';
import { TypeAddComponent } from './pages/type/type-add/type-add.component';
import { TypeEditComponent } from './pages/type/type-edit/type-edit.component';
import { TypeListComponent } from './pages/type/type-list/type-list.component';
import { VehicleaddComponent } from './pages/vehicle/vehicleadd/vehicleadd.component';
import { VehicleeditComponent } from './pages/vehicle/vehicleedit/vehicleedit.component';
import { VehiclelistComponent } from './pages/vehicle/vehiclelist/vehiclelist.component';

const routes: Routes = [
  { path: 'brandlist', component: BrandlistComponent },
  { path: 'brandadd', component: BrandaddComponent },
  { path: 'brandedit/:id', component: BrandeditComponent },
  { path: 'typelist', component: TypeListComponent },
  { path: 'typeadd', component: TypeAddComponent },
  { path: 'typeedit/:id', component: TypeEditComponent },
  { path: 'modellist', component: ModellistComponent },
  { path: 'modeladd', component: ModeladdComponent },
  { path: 'modeledit/:id', component: ModeleditComponent },
  { path: 'vehiclelist', component: VehiclelistComponent },
  { path: 'vehicleadd', component: VehicleaddComponent },
  { path: 'vehicleedit/:id', component: VehicleeditComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
