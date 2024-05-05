import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, forkJoin } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AnalysisService {
  private baseUrl = 'https://api.symanto.net/';
  private apiKey = '5ee3ddb6d2aa40aab37b309d876a64f3';

  constructor(private http: HttpClient) {}

  private getHeaders() {
    return new HttpHeaders({
      'Accept': 'application/json',
      'x-api-key': this.apiKey,
      'Content-Type': 'application/json'
    });
  }

  private postRequest(url: string, data: any): Observable<any> {
    return this.http.post(`${this.baseUrl}${url}`, JSON.stringify(data), { headers: this.getHeaders() });
  }

  analyzeEkmanEmotion(id: string, text: string): Observable<any> {
    const url = `${this.baseUrl}ekman-emotion?all=true`;
    const headers = new HttpHeaders({
      'Accept': 'application/json',
      'x-api-key': this.apiKey,
      'Content-Type': 'application/json'
    });
    const data = JSON.stringify([{ id: id, text: text, language: "en" }]);

    console.log('Sending request to:', url, 'with data:', data);
    return this.http.post(url, data, { headers });
  }
  analyzePersonality(id: string, text: string): Observable<any> {
    const url = `${this.baseUrl}personality?all=true`;
    const headers = new HttpHeaders({
      'Accept': 'application/json',
      'x-api-key': this.apiKey,
      'Content-Type': 'application/json'
    });
    const data = JSON.stringify([{ id: id, text: text, language: "en" }]);
    console.log('Sending request to:', url, 'with data:', data);
    return this.http.post(url, data, { headers });
  }
  analyzeSentiment(id: string, text: string): Observable<any> {
    const url = `${this.baseUrl}sentiment?all=true`;
    const headers = new HttpHeaders({
      'Accept': 'application/json',
      'x-api-key': this.apiKey,
      'Content-Type': 'application/json'
    });
    const data = JSON.stringify([{ id: id, text: text, language: "en" }]);
    console.log('Sending request to:', url, 'with data:', data);
    return this.http.post(url, data, { headers });
  }
  analyzeAge(id: string, text: string): Observable<any> {
    const url = `${this.baseUrl}age/doc-level?all=true`;
    const headers = new HttpHeaders({
      'Accept': 'application/json',
      'x-api-key': this.apiKey,
      'Content-Type': 'application/json'
    });
    const data = JSON.stringify([{ id: id, text: text, language: "en" }]);
    console.log('Sending request to:', url, 'with data:', data);
    return this.http.post(url, data, { headers });
  }
  analyzeGender(id: string, text: string): Observable<any> {
    const url = `${this.baseUrl}gender/doc-level?all=true`;
    const headers = new HttpHeaders({
      'Accept': 'application/json',
      'x-api-key': this.apiKey,
      'Content-Type': 'application/json'
    });
    const data = JSON.stringify([{ id: id, text: text, language: "en" }]);
    console.log('Sending request to:', url, 'with data:', data);
    return this.http.post(url, data, { headers });
  }

}
