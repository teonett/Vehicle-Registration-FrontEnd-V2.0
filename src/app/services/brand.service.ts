import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { Brand } from '../models/brand';

@Injectable({
  providedIn: 'root'
})
export class BrandService {

  private baseUrl = 'http://localhost:3000/brands';

  constructor(
    private http: HttpClient
    ) { }

  getBrandList() : Observable<any>{
      return this.http.get(`${this.baseUrl}`);
    }

  getBrantById(id: string){
    return this.http.get(`${this.baseUrl}/${id}`);
  }

  createBrand(brand: Brand) {
    return this.http.post(`${this.baseUrl}`, brand);
  }
  
  updateBrand(id: string, value: any): Observable<Object> {
    return this.http.put(`${this.baseUrl}/${id}`, value);
  }

  deleteBrand(id: string) {
    return this.http.delete(`${this.baseUrl}/${id}`, { responseType: 'text' });
  }
}
