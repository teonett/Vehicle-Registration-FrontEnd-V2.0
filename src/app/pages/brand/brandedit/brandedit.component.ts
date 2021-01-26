import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Brand } from 'src/app/models/brand';
import { BrandService } from 'src/app/services/brand.service';

@Component({
  selector: 'app-brandedit',
  templateUrl: './brandedit.component.html',
  styleUrls: ['./brandedit.component.css']
})
export class BrandeditComponent implements OnInit {

  id: string;
  brand: Brand;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private brandService: BrandService
  ) { }

  ngOnInit(): void {
    this.loadBrand();
  }

  loadBrand() {

    this.brand = new Brand();
    this.id = this.route.snapshot.params['id'];
    
    this.brandService.getBrantById(this.id)
      .subscribe(data => {
        console.log(data)
        this.brand = data;
      }, 
      error => console.log(error));
  }

  saveBrand() {
    this.brandService.updateBrand(this.id, this.brand)
    .subscribe(data => console.log(data), 
    error => console.log(error));
  this.brand = new Brand();
  this.gotoList();
  }


  onSubmit() {    
    this.saveBrand()
  }
  
  gotoList() {
    this.router.navigate(['/brandlist'])
  }

}
