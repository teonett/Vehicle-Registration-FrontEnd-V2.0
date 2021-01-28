import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Type } from 'src/app/models/type';
import { TypeService } from 'src/app/services/type.service';

@Component({
  selector: 'app-type-add',
  templateUrl: './type-add.component.html',
  styleUrls: ['./type-add.component.css']
})
export class TypeAddComponent implements OnInit {

  type: Type = new Type();
  submited = false;
  selectedValue: any;
  
  constructor(
    private router: Router,
    private typeService: TypeService
  ) { }

  ngOnInit(): void {
  }

  saveData() {
    this.typeService.create(this.type)
      .subscribe(data => console.log(data), error => 
        console.log(error));
    this.type = new Type();
    this.gotoList();
  }

  onSubmit() {
    this.submited = true;
    this.saveData()
  }
  
  gotoList() {
    this.router.navigate(['/typelist'])
  }

}
