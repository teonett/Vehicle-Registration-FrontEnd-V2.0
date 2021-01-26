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
    this.loadData();
  }

  loadData() {
    this.brands = this.brandService.getList();
  }

  edit(id: string) {
    this.router.navigate(['/brandedit', id]);
  }

  delete(id: string) {
    
    this.brandService.delete(id)
      .subscribe(
        data => {
          console.log(data);
          this.loadData();
        },
        error => console.log(error)
      );
  }

}
