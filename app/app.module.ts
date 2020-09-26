import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AngularCesiumModule } from 'angular-cesium';

import { AppComponent } from './app.component';
import { VisorcesiumComponent } from './visorcesium/visorcesium.component';

@NgModule({
  declarations: [
    AppComponent,
    VisorcesiumComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularCesiumModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
