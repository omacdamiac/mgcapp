import { Http } from '@angular/http';
import { Component, OnInit } from '@angular/core';
import { DataTiendasService } from './data-tiendas.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit{
   constructor( public _is:DataTiendasService ) {}
	//jsonPin?:any = this._is.info;
	selectedValue = "Activado";
	private value:any = {};
	
	title:string = 'Mangomarca';
	zoom:number = 16;
	lat: number = -12.010592;
	lng: number = -76.980029;

	nombreMarcador:string;
	latMarcador:string;
	lngMarcador:string;
	marcadorArrastrable:string;



	categorias=[
		{"id":0,"local":"BODEGA", "tipo":"B"},
		{"id":1,"local":"PANADERIA", "tipo":"P"},
		{"id":2,"local":"LICORERIA", "tipo":"Li"},
		{"id":3,"local":"LIBRERIA", "tipo":"L"}
	];



	selected(value:any) {
    	console.log('Selecciono el valor : ', value);
	}

	ngOnInit(){

	setTimeout(()=>{

			var jsonPin = this._is.info.tiendas;

			for(let pin in jsonPin){

				if (jsonPin[pin].state == this.selectedValue) { 
					var nuevoMarcador = {
						nombre: jsonPin[pin].name,
						lat: jsonPin[pin].lat,
						lng: jsonPin[pin].lon,
						direccion: jsonPin[pin].direccion,
						pin: jsonPin[pin].ubicar,
						abre: jsonPin[pin].horaabre,
						cierra: jsonPin[pin].horacierra,
						star: jsonPin[pin].star,
						icon_star: jsonPin[pin].icon_star,
						pago: jsonPin[pin].pago,
						delivery: jsonPin[pin].delivery,
						wifi: jsonPin[pin].wifi,
						web: jsonPin[pin].web,
						urlweb: jsonPin[pin].urlweb,
						label : jsonPin[pin].label,
						tipo : jsonPin[pin].tipo,
						imagen : jsonPin[pin].url_image,
						estado : jsonPin[pin].state,
						icon : jsonPin[pin].icon,
						drag:false
					}
					this.markers.push(nuevoMarcador);
					this.jsonMaster.push(nuevoMarcador);
				}	
			}

		},0)
	}
///////////////
//elimina los duplicados y muestra una lista
removerDuplicado(){
	//
	var hash = {};
	var newJson = this._is.info.tiendas;
	newJson = newJson.filter(function(current){
		var exists = !hash[current.label] || false;
		hash[current.label] = true;
		return exists;

	})

}
///////////////

	loadJson(){

		var jsonPin = this._is.info;

		for(let pin in jsonPin){

			if (jsonPin[pin].label == this.selectedValue) { 
				var nuevoMarcador = {
						nombre: jsonPin[pin].name,
						lat: jsonPin[pin].lat,
						lng: jsonPin[pin].lon,
						direccion: jsonPin[pin].direccion,
						pin: jsonPin[pin].ubicar,
						abre: jsonPin[pin].horaabre,
						cierra: jsonPin[pin].horacierra,
						star: jsonPin[pin].star,
						icon_star: jsonPin[pin].icon_star,
						pago: jsonPin[pin].pago,
						delivery: jsonPin[pin].delivery,
						wifi: jsonPin[pin].wifi,
						web: jsonPin[pin].web,
						urlweb: jsonPin[pin].urlweb,
						label : jsonPin[pin].label,
						tipo : jsonPin[pin].tipo,
						imagen : jsonPin[pin].url_image,
						estado : jsonPin[pin].state,
						icon : jsonPin[pin].icon,
						drag:false
			}

			this.markers.push(nuevoMarcador);
			}	
		}
	}


	mostrar(event){
        //console.log(event.valor);

		var jsonPin = this._is.info.tiendas;

		this.markers=[];

		for(let pin in jsonPin){

			if (jsonPin[pin].label == event.valor) { 
				var nuevoMarcador = {
						nombre: jsonPin[pin].name,
						lat: jsonPin[pin].lat,
						lng: jsonPin[pin].lon,
						direccion: jsonPin[pin].direccion,
						pin: jsonPin[pin].ubicar,
						abre: jsonPin[pin].horaabre,
						cierra: jsonPin[pin].horacierra,
						star: jsonPin[pin].star,
						icon_star: jsonPin[pin].icon_star,
						pago: jsonPin[pin].pago,
						delivery: jsonPin[pin].delivery,
						wifi: jsonPin[pin].wifi,
						web: jsonPin[pin].web,
						urlweb: jsonPin[pin].urlweb,
						label : jsonPin[pin].label,
						tipo : jsonPin[pin].tipo,
						imagen : jsonPin[pin].url_image,
						estado : jsonPin[pin].state,
						icon : jsonPin[pin].icon,
						drag:false
			}

		this.markers.push(nuevoMarcador);

			} else if(jsonPin[pin].state == event.valor){
				var nuevoMarcador = {
						nombre: jsonPin[pin].name,
						lat: jsonPin[pin].lat,
						lng: jsonPin[pin].lon,
						direccion: jsonPin[pin].direccion,
						pin: jsonPin[pin].ubicar,
						abre: jsonPin[pin].horaabre,
						cierra: jsonPin[pin].horacierra,
						star: jsonPin[pin].star,
						icon_star: jsonPin[pin].icon_star,
						pago: jsonPin[pin].pago,
						delivery: jsonPin[pin].delivery,
						wifi: jsonPin[pin].wifi,
						web: jsonPin[pin].web,
						urlweb: jsonPin[pin].urlweb,
						label : jsonPin[pin].label,
						tipo : jsonPin[pin].tipo,
						imagen : jsonPin[pin].url_image,
						estado : jsonPin[pin].state,
						icon : jsonPin[pin].icon,
						drag:false
			}
			this.markers.push(nuevoMarcador);

			}
		}


	}
	jsonMaster = [];
	markers=[];

	showPueblo(event):void{
        //console.log(event.valor +" ola");
    	}


	// mapCliqueado($event:any){
	// 	console.log("Mapa cliqueado");

	// 	var nuevoMarcador = {
	// 		nombre: 'sin titulo',
	// 		lat: $event.coords.lat,
	// 		lng: $event.coords.lng,
	// 		drag:false
	// 	}

	// 	this.markers.push(nuevoMarcador);
	// }



	// marcadorCliqueado(marcador:marker, index:number){
	// 	console.log("Marcador cliqueado " + marcador.nombre + " en el index: " + index);
	// }


	// posicionFinalMarcador(marcador:any, $event:any){
	// 	console.log("Posicion final: ", marcador, $event);

	// 	var actualizarMarcador = {
	// 	nombre: marcador.nombre,
	// 	lat: parseFloat(marcador.lat),
	// 	lng: parseFloat(marcador.lng),
	// 	drag:false
	// 	}
	// 	var nuevaLat = $event.coords.lat;
	// 	var nuevaLng = $event.coords.lng;


	// }

	// //Formulario
	// agregarMarcador(){
	// 	console.log('Agregado');

	// 	if (this.marcadorArrastrable == 'si') {
	// 		var esArrastrable = true;
	// 	}else{
	// 		var esArrastrable = false;
	// 	}

	// 	var nuevoMarcador = {
	// 		nombre:this.nombreMarcador,
	// 		lat:parseFloat(this.latMarcador),
	// 		lng:parseFloat(this.lngMarcador),
	// 		drag:esArrastrable
	// 	}
	// 	this.markers.push(nuevoMarcador);
	// }

}

//tipo de marcado
interface marker{
	nombre?:string;
	lat:number;
	lng:number;
	label?: string;
	estado?: string;
	icon?:string;
	drag:boolean;
}

