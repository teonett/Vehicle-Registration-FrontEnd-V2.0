import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { BrandlistComponent } from './pages/brand/brandlist/brandlist.component';
import { BrandeditComponent } from './pages/brand/brandedit/brandedit.component';
import { ModellistComponent } from './pages/model/modellist/modellist.component';
import { ModeleditComponent } from './pages/model/modeledit/modeledit.component';
import { VehiclelistComponent } from './pages/vehicle/vehiclelist/vehiclelist.component';
import { VehicleeditComponent } from './pages/vehicle/vehicleedit/vehicleedit.component';
import { BrandaddComponent } from './pages/brand/brandadd/brandadd.component';
import { ModeladdComponent } from './pages/model/modeladd/modeladd.component';
import { VehicleaddComponent } from './pages/vehicle/vehicleadd/vehicleadd.component';
import { TypeListComponent } from './pages/type/type-list/type-list.component';
import { TypeAddComponent } from './pages/type/type-add/type-add.component';
import { TypeEditComponent } from './pages/type/type-edit/type-edit.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    BrandlistComponent,
    BrandeditComponent,
    ModellistComponent,
    ModeleditComponent,
    VehiclelistComponent,
    VehicleeditComponent,
    BrandaddComponent,
    ModeladdComponent,
    VehicleaddComponent,
    TypeListComponent,
    TypeAddComponent,
    TypeEditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
