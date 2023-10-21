import { Component } from '@angular/core';
import { GetDiasService} from './get-dias.service';
@Component({
  selector: 'app-calendario',
  templateUrl: './calendario.component.html',
  styleUrls: ['./calendario.component.css']
})
export class CalendarioComponent {



	constructor( public get_dias: GetDiasService){}

	desplazar(direccion: number){
		let gd = this.get_dias;
		gd.anio += Math.floor( (gd.mes + direccion )/12 );
		gd.mes = ( gd.mes + direccion + 12 ) % 12;
		gd.nombreMes = gd.arrayDiasMes[gd.mes].nombre;
		gd.construirDiasCal(gd.anio, gd.mes);
	}
}
