import { Component, OnInit, Input } from '@angular/core';
import { MatDialog } from '@angular/material';
import { DialogListComponent } from '../dialog-list/dialog-list.component';

@Component({
  selector: 'app-dialog-locales',
  templateUrl: './dialog-locales.component.html',
  styleUrls: ['./dialog-locales.component.css']
})
export class DialogLocalesComponent implements OnInit {

  @Input('combo') categorias =[];
  @Input('pin') markers =[];
  @Input('master') jsonMaster=[];


	dialogResult = "";

  constructor(public dialog: MatDialog) { }

  ngOnInit() {
  }

  openDialog(){
  	let dialogRef = this.dialog.open(DialogListComponent,{
  		width: '100%',
      height:'600px',
  		data:  {
        nombre:this.jsonMaster
      }
  	});

	dialogRef.afterClosed().subscribe(result =>{
		console.log(`Dialog closed: ${result}`);
		this.dialogResult = result;
	})  	
  }

}
