import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  @Input('texto') title:string;
  @Input('combo') categorias =[];
  @Input('pin') markers =[];
  @Input('master') jsonMaster=[];

  @Output() PasameElPueblo = new EventEmitter();
  public selectedValue;


  constructor() { 
  }

  ngOnInit() {

  }

  lanzar(event){
  	this.PasameElPueblo.emit({valor:this.selectedValue});
  }

}
