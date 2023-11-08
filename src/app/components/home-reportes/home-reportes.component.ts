import { Component, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home-reportes',
  templateUrl: './home-reportes.component.html',
  styleUrls: ['./home-reportes.component.css']
})
export class HomeReportesComponent {

  @Input()
  nombre: string;
  
constructor(private route: ActivatedRoute) {
  this.nombre = this.route.snapshot.params['nombre'];
}

ngOnInit(){
  console.log( this.nombre );
}




}