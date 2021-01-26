import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Brand } from 'src/app/models/brand';
import { BrandService } from 'src/app/services/brand.service';

@Component({
  selector: 'app-brandadd',
  templateUrl: './brandadd.component.html',
  styleUrls: ['./brandadd.component.css']
})
export class BrandaddComponent implements OnInit {

  bramds: Brand[] = [];
  brand: Brand = new Brand();
  submited = false;
  selectedValue: any;
  
  constructor(
    private router: Router,
    private brandService: BrandService
  ) { }

  ngOnInit(): void {
  }

  saveBrand() {
    this.brandService.createBrand(this.brand)
      .subscribe(data => console.log(data), error => 
        console.log(error));
    this.brand = new Brand();
    this.gotoList();
  }

  onSubmit() {
    this.submited = true;
    this.saveBrand()
  }
  
  gotoList() {
    this.router.navigate(['/brandlist'])
  }
}
