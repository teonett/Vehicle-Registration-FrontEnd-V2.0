import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Observable } from 'rxjs';
import { Brand } from 'src/app/models/brand';
import { BrandService } from 'src/app/services/brand.service';

@Component({
  selector: 'app-brandlist',
  templateUrl: './brandlist.component.html',
  styleUrls: ['./brandlist.component.css']
})
export class BrandlistComponent implements OnInit {

  brands: Observable<Brand[]>;

  constructor(
    private brandService: BrandService,
    private router: Router
    ) { }

  ngOnInit(): void {
    this.reloadData();
  }

  reloadData() {
    this.brands = this.brandService.getBrandList();
  }

  brandEdit(id: string) {
    //this.router.navigate(['/brandedit', id]);
    this.router.navigate(['/brandedit']);
  }

  brandDelete(id: string) {
    
    this.brandService.deleteBrand(id)
      .subscribe(
        data => {
          console.log(data);
          this.reloadData();
        },
        error => console.log(error)
      );
  }

}
