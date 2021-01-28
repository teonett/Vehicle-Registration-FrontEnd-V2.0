import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Type } from 'src/app/models/type';
import { TypeService } from 'src/app/services/type.service';

@Component({
  selector: 'app-type-edit',
  templateUrl: './type-edit.component.html',
  styleUrls: ['./type-edit.component.css']
})
export class TypeEditComponent implements OnInit {

  id: string;
  type: Type;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private typeService: TypeService
  ) { }

  ngOnInit(): void {
    this.loadBrand();
  }

  loadBrand() {

    this.type = new Type();
    this.id = this.route.snapshot.params['id'];
    
    this.typeService.getById(this.id)
      .subscribe(data => {
        console.log(data)
        this.type = data;
      }, 
      error => console.log(error));
  }

  saveData() {
    this.typeService.update(this.id, this.type)
    .subscribe(data => console.log(data), 
    error => console.log(error));
  this.type = new Type();
  this.gotoList();
  }


  onSubmit() {    
    this.saveData()
  }
  
  gotoList() {
    this.router.navigate(['/typelist'])
  }

}
