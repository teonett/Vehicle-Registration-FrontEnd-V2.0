import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Brand } from 'src/app/models/brand';
import { Model } from 'src/app/models/model';
import { Type } from 'src/app/models/type';
import { BrandService } from 'src/app/services/brand.service';
import { ModelService } from 'src/app/services/model.service';
import { TypeService } from 'src/app/services/type.service';

@Component({
  selector: 'app-modeledit',
  templateUrl: './modeledit.component.html',
  styleUrls: ['./modeledit.component.css']
})
export class ModeleditComponent implements OnInit {

  id: string;
  model: Model;

  brands: Brand[] = [];
  types: Type[] = [];

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private modelService: ModelService,
    private brandService: BrandService,
    private typeService: TypeService
  ) { }

  ngOnInit(): void {
    this.loadData();
    this.listBrands();
    this.listTypes();
  }

  loadData() {

    this.model = new Model();
    this.id = this.route.snapshot.params['id'];
    
    this.modelService.getById(this.id)
      .subscribe(data => {
        console.log(data)
        this.model = data;
      }, 
      error => console.log(error));
  }

  saveData() {
    this.modelService.update(this.id, this.model)
    .subscribe(data => console.log(data), 
    error => console.log(error));
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
    this.saveData()
  }
  
  gotoList() {
    this.router.navigate(['/modellist'])
  }

}
