import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Brand } from 'src/app/models/brand';
import { Model } from 'src/app/models/model';
import { Type } from 'src/app/models/type';
import { BrandService } from 'src/app/services/brand.service';
import { ModelService } from 'src/app/services/model.service';
import { TypeService } from 'src/app/services/type.service';

@Component({
  selector: 'app-modeladd',
  templateUrl: './modeladd.component.html',
  styleUrls: ['./modeladd.component.css']
})
export class ModeladdComponent implements OnInit {

  model: Model = new Model();

  brands: Brand[] = [];
  types: Type[] = [];

  submited = false;
  selectedValue: any;

  constructor(
    private router: Router,
    private modelService: ModelService,
    private brandService: BrandService,
    private typeService: TypeService
  ) { }

  ngOnInit(): void {
    this.listBrands();
    this.listTypes();
  }

  saveData() {
    this.modelService.create(this.model)
      .subscribe(data => console.log(data), error => 
        console.log(error));
    this.model = new Model();
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

  onSubmit() {
    this.submited = true;
    this.saveData()
  }
  
  gotoList() {
    this.router.navigate(['/modellist'])
  }

}
