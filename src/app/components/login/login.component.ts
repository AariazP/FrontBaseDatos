import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  private route: Router;

  constructor(route:Router) {
    this.route = route;
  }

  ngOnInit(): void {
  }


  public iniciarSesion(): void {
    this.route.navigate(["/iniciar-sesion"]);
  }

  public crearCuenta(): void {
    this.route.navigate(["/crear-cuenta"]);
  }

}
