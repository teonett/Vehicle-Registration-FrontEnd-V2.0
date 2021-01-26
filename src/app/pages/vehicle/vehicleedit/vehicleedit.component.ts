import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Vehicle } from 'src/app/models/vehicle';
import { VehicleService } from 'src/app/services/vehicle.service';

@Component({
  selector: 'app-vehicleedit',
  templateUrl: './vehicleedit.component.html',
  styleUrls: ['./vehicleedit.component.css']
})
export class VehicleeditComponent implements OnInit {

  id: string;
  vehicle: Vehicle;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private vehicleService: VehicleService
  ) { }

  ngOnInit(): void {
    this.loadData();
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

  saveData() {
    this.vehicleService.update(this.id, this.vehicle)
    .subscribe(data => console.log(data), 
    error => console.log(error));
  this.vehicle = new Vehicle();
  this.gotoList();
  }

  onSubmit() {    
    this.saveData()
  }
  
  gotoList() {
    this.router.navigate(['/vehiclelist'])
  }

}
