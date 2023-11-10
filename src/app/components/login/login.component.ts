import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { PeticionesHTTP } from '../peticiones-http.service';
import { CompartirInformacionService } from '../compartir-informacion.service';

type Rutas = {
	[key: string]: string;
};

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {




  formData = {
    rol: "Seleccionar un rol",
    correo: "juanperez@gmail.com",
    contrasenia: "contrasenia123"
  }

  private rutas: Rutas = {"Estudiante": "/estudiantes/listarEstudiantes",
			  "Docente": "/docentes/listarDocentes",
			  "Administrador": "/adminsitradores/listarAdministradores"};

  constructor(private route: Router, private httpServicio: PeticionesHTTP, private compartirInfo: CompartirInformacionService) {
  }

  ngOnInit(): void {
    this.formData.rol = "Seleccione un rol";
  }


  public iniciarSesion(): void {
    this.route.navigate(["/iniciar-sesion"]);
  }

  public crearCuenta(): void {
    this.route.navigate(["/crear-cuenta"]);
  }

  onSubmit() {
    const rol: string = this.formData.rol;
    const endpoint = this.rutas[rol];
    this.httpServicio.enviarFormulario(endpoint, this.formData).subscribe((data) => {
      if (data) {
        console.log(data);
        this.compartirInfo.setInfo({nombre: data.nombre, correo: data.correo, rol: this.formData.rol});
        this.route.navigate(["/home"]);
      }
    });
    console.log(this.formData);
  }
}
