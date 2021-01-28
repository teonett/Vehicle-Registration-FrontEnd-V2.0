import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Model } from 'src/app/models/model';
import { ModelService } from 'src/app/services/model.service';

@Component({
  selector: 'app-modellist',
  templateUrl: './modellist.component.html',
  styleUrls: ['./modellist.component.css']
})
export class ModellistComponent implements OnInit {

  models: Observable<Model[]>;

  constructor(
    private modelService: ModelService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.loadData();
  }

  loadData() {
    this.models = this.modelService.getList();
  }

  edit(id: string) {
    this.router.navigate(['/modeledit', id]);
  }

  delete(id: string) {
    
    this.modelService.delete(id)
      .subscribe(
        data => {
          console.log(data);
          this.loadData();
        },
        error => console.log(error)
      );
  }

}
