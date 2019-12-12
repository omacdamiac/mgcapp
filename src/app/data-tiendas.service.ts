import { Injectable } from '@angular/core';
import { Http } from '@angular/http'

@Injectable()
export class DataTiendasService {

	url: string = "assets/data/info.tiendas.json"
	info:any = {};
	cargada:boolean = false;

  constructor(public http:Http) {
  	this.http.get(this.url)
  			.subscribe( data =>{
  				this.cargada = true;
  				this.info = data.json();
  				//this.info = data.json().tiendas[0];

  	})
  }
}  
