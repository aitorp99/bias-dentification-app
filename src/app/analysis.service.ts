import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AnalysisService {
  private baseUrl = 'http://localhost:3000/api/';
  
  constructor(private http: HttpClient) {}

  private getHeaders() {
    return new HttpHeaders({
      'Accept': 'application/json',
      'x-api-key': '5ee3ddb6d2aa40aab37b309d876a64f3',
      'Content-Type': 'application/json'
    });
  }

  private postRequest(url: string, data: any): Observable<any> {
    return this.http.post(url, data, { headers: this.getHeaders() });
  }

  analyzeEkmanEmotion(id: string, text: string, language: string): Observable<any> {
    const url = `${this.baseUrl}ekman-emotion`;
    const data = { id, text, language };
    return this.postRequest(url, data);
  }

  analyzePersonality(id: string, text: string, language: string): Observable<any> {
    const url = `${this.baseUrl}personality`;
    const data = { id, text, language };
    return this.postRequest(url, data);
  }

  analyzeSentiment(id: string, text: string, language: string): Observable<any> {
    const url = `${this.baseUrl}sentiment`;
    const data = { id, text, language };
    return this.postRequest(url, data);
  }

  analyzeAge(id: string, text: string, language: string): Observable<any> {
    const url = `${this.baseUrl}age`;
    const data = { id, text, language };
    return this.postRequest(url, data);
  }

  analyzeGender(id: string, text: string, language: string): Observable<any> {
    const url = `${this.baseUrl}gender`;
    const data = { id, text, language };
    return this.postRequest(url, data);
  }
}
