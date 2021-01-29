import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { Vehicle } from '../models/vehicle';

@Injectable({
  providedIn: 'root'
})
export class VehicleService {

  private baseUrl = 'https://localhost:5001/v1/vehicle'

  constructor(
    private http: HttpClient
    ) { }

  httpOptions = {
      headers: new HttpHeaders ({ 'Content-Type': 'application/json' })
    }

  getList() : Observable<any>{
      return this.http.get<Vehicle[]>(this.baseUrl)
      .pipe(
        retry(2),
        catchError(this.handleError))
  }

  getById(id: string) : Observable<Vehicle> {
    return this.http.get<Vehicle>(`${this.baseUrl}/${id}`)
    .pipe(
      retry(2),
      catchError(this.handleError))
  }



  create(vehicle: Vehicle): Observable<Vehicle> {
    return this.http.post<Vehicle>(this.baseUrl, JSON.stringify(vehicle), this.httpOptions)
      .pipe(
        retry(2),
        catchError(this.handleError)
      )
  }
  
  update(id: string, vehicle: Vehicle): Observable<Vehicle> {
    return this.http.put<Vehicle>(this.baseUrl, JSON.stringify(vehicle), this.httpOptions)
      .pipe(
        retry(1),
        catchError(this.handleError)
      )
  }

  delete(id: string) {
    return this.http.delete(`${this.baseUrl}/${id}`, { responseType: 'text' })
      .pipe(
        retry(1),
        catchError(this.handleError)
      )
  }

  handleError(error: HttpErrorResponse) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      errorMessage = error.error.message;
    } else {
      errorMessage = `Error code: ${error.status}, ` + `message: ${error.message}`;
    }

    console.log(errorMessage);
    
    return throwError(errorMessage);
  };
  
}
