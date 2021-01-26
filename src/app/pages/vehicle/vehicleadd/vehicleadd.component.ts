import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Vehicle } from 'src/app/models/vehicle';
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
  
  constructor(
    private router: Router,
    private vehicleService: VehicleService
  ) { }

  ngOnInit(): void {
  }

  saveData() {
    this.vehicleService.create(this.vehicle)
      .subscribe(data => console.log(data), error => 
        console.log(error));
    this.vehicle = new Vehicle();
    this.gotoList();
  }

  onSubmit() {
    this.submited = true;
    this.saveData()
  }
  
  gotoList() {
    this.router.navigate(['/vehiclelist'])
  }

}
