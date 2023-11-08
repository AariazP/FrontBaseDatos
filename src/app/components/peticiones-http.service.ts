import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

type Rutas = {
	[key: string]: string;
};

@Injectable({
  providedIn: 'root',
})
export class PeticionesHTTP {

  private baseApiUrl = 'http://localhost:9009';
  private rutas: Rutas = {"Estudiante": "/estudiantes/listarEstudiantes",
			  "Docente": "/docentes/listarDocentes",
			  "Administrador": "adminsitradores/listarAdministradores"};
  constructor(private http: HttpClient) {}

  enviarFormulario(body: any): Observable<any> {
    const rol: string = body.rol;
    const endpoint = this.rutas[rol];
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.post(`${this.baseApiUrl}${endpoint}`, body, {headers: headers});
  }
}


