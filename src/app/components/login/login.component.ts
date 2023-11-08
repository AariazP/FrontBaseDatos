import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { PeticionesHTTP } from '../peticiones-http.service';

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

  constructor(private route: Router, private httpServicio: PeticionesHTTP) {
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
    this.httpServicio.enviarFormulario(this.formData).subscribe((data) => {
      if (data) {
        console.log(data);
        this.route.navigate(["/home"], {queryParams: {nombre: data.nombre}});
      }
    });
    console.log(this.formData);
  }
}
