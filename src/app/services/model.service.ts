import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Model } from '../models/model';

@Injectable({
  providedIn: 'root'
})
export class ModelService {

  private baseUrl = 'http://localhost:3000/models';

  constructor(
    private http: HttpClient
    ) { }

  getModelList() : Observable<any>{
      return this.http.get(`${this.baseUrl}`);
    }

  getModelById(id: string){
    return this.http.get(`${this.baseUrl}/${id}`);
  }

  createModel(brand: Model) {
    return this.http.post(`${this.baseUrl}`, brand);
  }
  
  updateModel(id: string, value: any): Observable<Object> {
    return this.http.put(`${this.baseUrl}/${id}`, value);
  }

  deleteModel(id: string) {
    return this.http.delete(`${this.baseUrl}/${id}`, { responseType: 'text' });
  }
  
}
