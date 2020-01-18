import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms'

import { PrimeNgExternalModules } from './external-modules/primeng-modules'
import { AngularMaterialExternalModules } from './external-modules/angular-material-modules'

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,
    PrimeNgExternalModules,
    AngularMaterialExternalModules
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
