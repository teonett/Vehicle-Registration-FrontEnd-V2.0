import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { Model } from '../models/model';

@Injectable({
  providedIn: 'root'
})
export class ModelService {

  private baseUrl = 'http://localhost:3000/models';

  constructor(
    private http: HttpClient
    ) { }

  httpOptions = {
      headers: new HttpHeaders ({ 'Content-Type': 'application/json' })
    }

    getList() : Observable<any>{
      return this.http.get<Model[]>(this.baseUrl)
      .pipe(
        retry(2),
        catchError(this.handleError))
  }

  getById(id: string) : Observable<Model> {
    return this.http.get<Model>(`${this.baseUrl}/${id}`)
    .pipe(
      retry(2),
      catchError(this.handleError))
  }

  create(model: Model): Observable<Model> {
    return this.http.post<Model>(this.baseUrl, JSON.stringify(model), this.httpOptions)
      .pipe(
        retry(2),
        catchError(this.handleError)
      )
  }
  
  update(id: string, model: Model): Observable<Model> {
    return this.http.put<Model>(this.baseUrl, JSON.stringify(model), this.httpOptions)
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
