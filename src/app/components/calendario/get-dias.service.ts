import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GetDiasService {

  public mes: number;
  public nombreMes: string;
  public anio: number;


  public arrayDiasMes = [ {nombre:"Ene" , dias: 31}, {nombre:"Feb" , dias: 28}, {nombre:"Mar" , dias: 31}, {nombre:"Abr" , dias: 30}, {nombre:"May" , dias: 31},  {nombre:"Jun" , dias: 30}, {nombre:"Jul" , dias: 31}, {nombre:"Ago" , dias: 31},  {nombre:"Sep" , dias: 30}, {nombre:"Oct" , dias: 31}, {nombre:"Nov" , dias: 30}, {nombre:"Dic" , dias: 31} ];

  public arrayDias: number[][]; 
  calcularDiaSemana(anio: number, mes: number) {
	  mes += 1;
	  if (mes < 3) {
		  mes += 12;
		  anio -= 1;
	  }

	    var h = ( 1 + Math.floor(13 * (mes + 1) / 5) + anio + Math.floor(anio / 4) - Math.floor(anio / 100) + Math.floor(anio / 400)) % 7;


	  return ( h + 7 - 2 ) % 7;
  }


  construirDiasCal(anio: number, mes: number){

	  let diaSemana = this.calcularDiaSemana( anio, mes );
	  let dia = 1;
	  this.arrayDias = [];
	  if ( anio % 4 == 0 ) this.arrayDiasMes[1].dias=29;
	  for ( var i = 0; i < Math.ceil( ( diaSemana + this.arrayDiasMes[this.mes].dias ) / 7) ; i++ ){
		  this.arrayDias.push([])
		  for ( var j = 0; j < 7; j++) {
			  if ( j + 7*i >= diaSemana && dia <= this.arrayDiasMes[mes].dias  ) {
				  this.arrayDias[i].push( dia );
				  dia++;
			  }

			  else {
				  this.arrayDias[i].push( 0 );
			  }
		  }

	  }
  }  

  constructor() { 
	  const fechaActual = new Date();
	  this.anio = 2023; //fechaActual.getFullYear();
	  this.mes =  10;//fechaActual.getMonth();
	  this.arrayDias = [];
	  this.nombreMes = this.arrayDiasMes[this.mes].nombre;
	  this.construirDiasCal(this.anio, this.mes);
  }
}
