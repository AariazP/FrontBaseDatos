import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';



@Injectable({
  providedIn: 'root',
})
export class PeticionesHTTP {

  private baseApiUrl = 'http://localhost:9009';
  
  constructor(private http: HttpClient) {}

  enviarFormulario(endpoint: string, body: any): Observable<any> {
    
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.post(`${this.baseApiUrl}${endpoint}`, body, {headers: headers});
  }
}
