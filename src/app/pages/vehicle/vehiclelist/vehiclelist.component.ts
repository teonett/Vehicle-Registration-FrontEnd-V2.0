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
    this.loadData();
  }

  loadData() {
    this.vehicles = this.vehicleService.getList();
  }

  edit(id: string) {
    this.router.navigate(['/vehicleedit', id]);
  }

  delete(id: string) {
    
    this.vehicleService.delete(id)
      .subscribe(
        data => {
          console.log(data);
          this.loadData();
        },
        error => console.log(error)
      );
  }

}
