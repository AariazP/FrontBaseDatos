import { Component, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CompartirInformacionService } from '../compartir-informacion.service';

@Component({
  selector: 'app-home-reportes',
  templateUrl: './home-reportes.component.html',
  styleUrls: ['./home-reportes.component.css']
})
export class HomeReportesComponent {

  
  info: any;
  
constructor(private route: ActivatedRoute, private compartirInfo: CompartirInformacionService) {
  this.info = compartirInfo.getInfo();
}

ngOnInit(){
  console.log( this.info );
}

}