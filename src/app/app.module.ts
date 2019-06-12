import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { RoundProgressComponent }  from 'angular-svg-round-progressbar';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RoundProgressComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
