import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { DataTiendasService } from './data-tiendas.service';//servicio
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatInputModule,
  MatButtonModule,
  MatAutocompleteModule,
  MatSelectModule,
  MatProgressBarModule,
  MatDialogModule,
  MatToolbarModule,
  MatCardModule,
  MatTooltipModule } from '@angular/material';


import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { PromoComponent } from './promo/promo.component';
import { DialogLocalesComponent } from './dialog-locales/dialog-locales.component';
import { DialogListComponent } from './dialog-list/dialog-list.component';

import { AgmCoreModule } from '@agm/core';

@NgModule({

  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatButtonModule,
    MatAutocompleteModule,
    MatSelectModule,
    MatProgressBarModule,
    MatDialogModule,
    MatToolbarModule,
    MatCardModule,
    MatTooltipModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyCYEDxWzpaae17b62ro-sgJyOr-WZX3mOs'
    })],
    entryComponents:[
    DialogListComponent
    ],
  providers: [ 
    DataTiendasService
    ],
  declarations: [AppComponent, DialogLocalesComponent, DialogListComponent, MainComponent, PromoComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
