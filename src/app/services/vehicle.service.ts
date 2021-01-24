import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Vehicle } from '../models/vehicle';

@Injectable({
  providedIn: 'root'
})
export class VehicleService {

  private baseUrl = 'http://localhost:3000/vehicles';

  constructor(
    private http: HttpClient
    ) { }

  getVehicleList() : Observable<any>{
      return this.http.get(`${this.baseUrl}`);
    }

  getVehicleById(id: string){
    return this.http.get(`${this.baseUrl}/${id}`);
  }

  createVehicle(brand: Vehicle) {
    return this.http.post(`${this.baseUrl}`, brand);
  }
  
  updateVehicle(id: string, value: any): Observable<Object> {
    return this.http.put(`${this.baseUrl}/${id}`, value);
  }

  deleteVehicle(id: string) {
    return this.http.delete(`${this.baseUrl}/${id}`, { responseType: 'text' });
  }
  
}
