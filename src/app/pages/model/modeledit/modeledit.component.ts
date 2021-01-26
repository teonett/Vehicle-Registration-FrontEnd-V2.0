import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Model } from 'src/app/models/model';
import { ModelService } from 'src/app/services/model.service';

@Component({
  selector: 'app-modeledit',
  templateUrl: './modeledit.component.html',
  styleUrls: ['./modeledit.component.css']
})
export class ModeleditComponent implements OnInit {

  id: string;
  model: Model;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private modelService: ModelService
  ) { }

  ngOnInit(): void {
    this.loadData();
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


  onSubmit() {    
    this.saveData()
  }
  
  gotoList() {
    this.router.navigate(['/modellist'])
  }

}
