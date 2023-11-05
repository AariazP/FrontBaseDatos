import { Component } from '@angular/core';
import { PeticionesHTTP } from './components/peticiones-http.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'frontBaseDatos';

  constructor(private peticionHTTP: PeticionesHTTP) {

  }

  ngOnInit(){

  }

}
