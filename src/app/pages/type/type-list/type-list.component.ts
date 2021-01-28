import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Type } from 'src/app/models/type';
import { TypeService } from 'src/app/services/type.service';

@Component({
  selector: 'app-type-list',
  templateUrl: './type-list.component.html',
  styleUrls: ['./type-list.component.css']
})
export class TypeListComponent implements OnInit {

  types: Observable<Type[]>;

  constructor(
    private typeService: TypeService,
    private router: Router
    ) { }

  ngOnInit(): void {
    this.loadData();
  }

  loadData() {
    this.types = this.typeService.getList();
  }

  edit(id: string) {
    this.router.navigate(['/typeedit', id]);
  }

  delete(id: string) {
    
    this.typeService.delete(id)
      .subscribe(
        data => {
          console.log(data);
          this.loadData();
        },
        error => console.log(error)
      );
  }

}
