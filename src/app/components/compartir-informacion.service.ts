import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CompartirInformacionService {

  info: any; 
  constructor() { }

  getInfo(){
    return this.info;
  }

  setInfo(info: any){
    this.info = info;
  }
  
}
