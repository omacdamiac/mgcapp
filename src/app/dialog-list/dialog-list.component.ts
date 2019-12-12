import { Component, OnInit, Inject, Input } from '@angular/core';
import { MatDialogRef } from '@angular/material';
import { MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-dialog-list',
  templateUrl: './dialog-list.component.html',
  styleUrls: ['./dialog-list.component.css']
})
export class DialogListComponent implements OnInit {
  @Input('combo') categorias =[];
  @Input('pin') markers =[];
  @Input('master') jsonMaster=[];
  public selectedValue;
  day = new Date();
  hour = this.day.getHours();
  minute = this.day.getMinutes();
  hora= this.hour+':'+this.minute;




  constructor(public thisDialogRef: MatDialogRef<DialogListComponent>, @Inject(MAT_DIALOG_DATA) public data: string ) { }

  ngOnInit() {
    console .log(this.hora);
  }



  onCloseConfirm(){
  	this.thisDialogRef.close('Confirm')

  }

  onCloseCancel(){
  	  this.thisDialogRef.close('Cancel')

  }

}
