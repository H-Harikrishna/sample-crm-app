import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button'

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatButtonModule,
    BrowserAnimationsModule     // it was added automatically while installing angular material
  ],
  providers: [],
// like we have bootstrapModule in main.ts, we also have bootstrap in every module to start with a specific component.
// here it is AppComponent by default.
  bootstrap: [AppComponent]
})
export class AppModule { }
