import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Vehicle } from 'src/app/models/vehicle';
import { VehicleService } from 'src/app/services/vehicle.service';

@Component({
  selector: 'app-vehiclelist',
  templateUrl: './vehiclelist.component.html',
  styleUrls: ['./vehiclelist.component.css']
})
export class VehiclelistComponent implements OnInit {

  vehicles: Observable<Vehicle[]>;

  constructor(
    private vehicleService: VehicleService,
    private router: Router
    ) { }

  ngOnInit(): void {
    this.reloadData();
  }

  reloadData() {
    this.vehicles = this.vehicleService.getList();
  }

  VehicleEdit(id: string) {
    //this.router.navigate(['/vehicleedit', id]);
    this.router.navigate(['/vehicleedit']);
  }

  VehicleDelete(id: string) {
    
    this.vehicleService.delete(id)
      .subscribe(
        data => {
          console.log(data);
          this.reloadData();
        },
        error => console.log(error)
      );
  }

}
