import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable, throwError } from 'rxjs';
import { Brand } from '../models/brand';
import { retry, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class BrandService {

  private baseUrl = 'https://localhost:5001/v1/brand'

  constructor(
    private http: HttpClient
    ) { }

  httpOptions = {
      headers: new HttpHeaders ({ 'Content-Type': 'application/json' })
    }

  getBrandList() : Observable<any>{
      return this.http.get<Brand[]>(this.baseUrl)
      .pipe(
        retry(2),
        catchError(this.handleError))
  }

  getBrantById(id: string) : Observable<Brand> {
    return this.http.get<Brand>(`${this.baseUrl}/${id}`)
    .pipe(
      retry(2),
      catchError(this.handleError))
  }

  createBrand(brand: Brand): Observable<Brand> {
    return this.http.post<Brand>(this.baseUrl, JSON.stringify(brand), this.httpOptions)
      .pipe(
        retry(2),
        catchError(this.handleError)
      )
  }
  
  updateBrand(id: string, brand: Brand): Observable<Brand> {
    return this.http.put<Brand>(this.baseUrl, JSON.stringify(brand), this.httpOptions)
      .pipe(
        retry(1),
        catchError(this.handleError)
      )
  }

  deleteBrand(id: string) {
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
