import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { MwModule } from '@bakesaled/moose-watch';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    MwModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
