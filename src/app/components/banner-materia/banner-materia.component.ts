import { Component, Input} from '@angular/core';

@Component({
  selector: 'app-banner-materia',
  templateUrl: './banner-materia.component.html',
  styleUrls: ['./banner-materia.component.css']
})
export class BannerMateriaComponent {

	@Input() titulo: string = '';

	@Input() ruta: string = '';

	constructor(){}
}
