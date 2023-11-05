import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import { PeticionesHTTP } from '../peticiones-http.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  


  formData = {
	  correo: "",
	  contrasenia: "" 
  }
  constructor(private route: Router, private httpServicio: PeticionesHTTP) {
  }

  ngOnInit(): void {
	  this.formData = {correo: "correo3232@gmail.com", contrasenia:"323"};
  }


public iniciarSesion(): void {
    this.route.navigate(["/iniciar-sesion"]);
  }

  public crearCuenta(): void {
    this.route.navigate(["/crear-cuenta"]);
  }

  onSubmit() {
    console.log("datos formulario");
    this.httpServicio.enviarFormulario(this.formData).subscribe( (data) =>{
      if ( data != null )
    } );
  console.log(this.formData);
  }
}
