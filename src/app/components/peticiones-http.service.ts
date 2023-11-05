import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PeticionesHTTP {

  private apiUrl = 'http://localhost:9009/estudiantes/listarEstudiantes';

  constructor(private http: HttpClient) {}

  enviarFormulario(body: any): Observable<any> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.post(`${this.apiUrl}`, body, {headers: headers});
  }
}


