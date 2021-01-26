import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Model } from 'src/app/models/model';
import { ModelService } from 'src/app/services/model.service';

@Component({
  selector: 'app-modeladd',
  templateUrl: './modeladd.component.html',
  styleUrls: ['./modeladd.component.css']
})
export class ModeladdComponent implements OnInit {

  model: Model = new Model();
  submited = false;
  selectedValue: any;

  constructor(
    private router: Router,
    private modelService: ModelService
  ) { }

  ngOnInit(): void {
  }

  saveData() {
    this.modelService.create(this.model)
      .subscribe(data => console.log(data), error => 
        console.log(error));
    this.model = new Model();
    this.gotoList();
  }

  onSubmit() {
    this.submited = true;
    this.saveData()
  }
  
  gotoList() {
    this.router.navigate(['/modellist'])
  }

}
