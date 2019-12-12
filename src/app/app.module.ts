import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { MainpageComponent } from './mainpage/mainpage.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { TypedetailComponent } from './typedetail/typedetail.component';
import { AdsearchComponent } from './adsearch/adsearch.component';
import {QRCodeModule} from 'angular2-qrcode';



@NgModule({
  declarations: [
    AppComponent,
    MainpageComponent,
    TypedetailComponent,
    AdsearchComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    QRCodeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
