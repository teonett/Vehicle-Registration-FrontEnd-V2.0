import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Brand } from 'src/app/models/brand';
import { Model } from 'src/app/models/model';
import { Type } from 'src/app/models/type';
import { Vehicle } from 'src/app/models/vehicle';
import { BrandService } from 'src/app/services/brand.service';
import { ModelService } from 'src/app/services/model.service';
import { TypeService } from 'src/app/services/type.service';
import { VehicleService } from 'src/app/services/vehicle.service';

@Component({
  selector: 'app-vehicleedit',
  templateUrl: './vehicleedit.component.html',
  styleUrls: ['./vehicleedit.component.css']
})
export class VehicleeditComponent implements OnInit {

  id: string;
  vehicle: Vehicle;

  brands: Brand[] = [];
  types: Type[] = [];
  models: Model[] = [];

  submited = false;
  selectedValue: any;
  
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private vehicleService: VehicleService,
    private brandService: BrandService,
    private typeService: TypeService,
    private modelService: ModelService
  ) { }

  ngOnInit(): void {
    this.loadData();
    this.listBrands();
    this.listTypes();
    this.listModels();
  }

  loadData() {

    this.vehicle = new Vehicle();
    this.id = this.route.snapshot.params['id'];
    
    this.vehicleService.getById(this.id)
      .subscribe(data => {
        console.log(data)
        this.vehicle = data;
      }, 
      error => console.log(error));
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

  gotoList() {
    this.router.navigate(['/vehiclelist'])
  }

  saveData() {
    this.vehicleService.update(this.id, this.vehicle)
      .subscribe(data => console.log(data), error => 
        console.log(error));
    this.vehicle = new Vehicle();
    this.gotoList();
  }

  onSubmit() {
    this.submited = true;
    this.saveData()
  }

}
