import { Component, OnInit } from '@angular/core';
import { PeticionesHTTP } from '../peticiones-http.service';

@Component({
  selector: 'app-crear-cuenta',
  templateUrl: './crear-cuenta.component.html',
  styleUrls: ['./crear-cuenta.component.css']
})
export class CrearCuentaComponent implements OnInit {

  formData = {
    nombre: "rodrigo",
    apellido: "medina",
    correo: "medinaRod22@gmail.com",
    contrasenia: "Rodrigo&&&2001",
    esEstudiante: "No"
  }


  constructor( private httpServ: PeticionesHTTP){}

  onSubmit(){
    this.httpServ.enviarFormulario("/crearCuenta/crearEstudiante", this.formData).subscribe( (data) =>{
      console.log(data);
    } )
  }

  ngOnInit(): void {
      
  }
}
