import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PredictionService {
  private baseUrl = 'http://localhost:5000'; // Asegúrate de que esta URL coincida con la URL del backend

  constructor(private http: HttpClient) {}

  private getHeaders() {
    return new HttpHeaders({
      'Content-Type': 'application/json'
    });
  }

  predictJoblib1(data: any): Observable<any> {
    const url = `${this.baseUrl}/predict-joblib-1`;
    return this.http.post(url, data, { headers: this.getHeaders() });
  }

  predictJoblib2(data: any): Observable<any> {
    const url = `${this.baseUrl}/predict-joblib-2`;
    return this.http.post(url, data, { headers: this.getHeaders() });
  }

  predictH5(data: any): Observable<any> {
    const url = `${this.baseUrl}/predict-h5`;
    return this.http.post(url, data, { headers: this.getHeaders() });
  }
}
