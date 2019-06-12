import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import {  } from 'rxjs';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Countdown-Desktop-Application';

  max=1;
  curr=0;
  start(){
    Rx.Observable
      .interval(200)
      .takeWhile( _ => !this.isFinished )
      .do(_ => this.curr += 0.1)
      .subscribe();      
  }
  finish(){
    this.curr=this.max;
  }
  reset(){
    this.curr=0;
  }

  // Error Handling
  get maxVal(){
    return isNaN(this.max) || this.max<0.1 ? 0.1:this.max;
  }
  get currVal(){
    return isNaN(this.curr) || this.curr<0 ? 0:this.curr;
  }
  get isFinished(){
    return this.currVal>this.maxVal;
  }
}
