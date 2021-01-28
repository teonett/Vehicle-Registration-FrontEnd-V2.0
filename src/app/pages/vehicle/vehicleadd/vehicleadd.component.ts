import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Brand } from 'src/app/models/brand';
import { Model } from 'src/app/models/model';
import { Type } from 'src/app/models/type';
import { Vehicle } from 'src/app/models/vehicle';
import { BrandService } from 'src/app/services/brand.service';
import { ModelService } from 'src/app/services/model.service';
import { TypeService } from 'src/app/services/type.service';
import { VehicleService } from 'src/app/services/vehicle.service';

@Component({
  selector: 'app-vehicleadd',
  templateUrl: './vehicleadd.component.html',
  styleUrls: ['./vehicleadd.component.css']
})
export class VehicleaddComponent implements OnInit {

  vehicle: Vehicle = new Vehicle();
  submited = false;
  selectedValue: any;

  brands: Brand[] = [];
  types: Type[] = [];
  models: Model[] = [];
  
  constructor(
    private router: Router,
    private vehicleService: VehicleService,
    private brandService: BrandService,
    private typeService: TypeService,
    private modelService: ModelService
  ) { }

  ngOnInit(): void {
    this.listBrands();
    this.listTypes();
    this.listModels()
  }

  saveData() {
    this.vehicleService.create(this.vehicle)
      .subscribe(data => console.log(data), error => 
        console.log(error));
    this.vehicle = new Vehicle();
    this.gotoList();
  }

  listBrands() {
    this.brandService.getList().subscribe((brands: Brand[]) => {
      this.brands = brands;
    });
  } 

  listTypes() {
    this.typeService.getList().subscribe((types: Type[]) => {
      this.types = types;
    });
  } 

  listModels() {
    this.modelService.getList().subscribe((models: Model[]) => {
      this.models = models;
    });
  }

  onSubmit() {
    this.submited = true;
    this.saveData()
  }
  
  gotoList() {
    this.router.navigate(['/vehiclelist'])
  }

}
