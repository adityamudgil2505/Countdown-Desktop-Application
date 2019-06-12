import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/interval';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/takeWhile';
import 'rxjs/add/operator/do';


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
    const interval = Observable.interval(100);
    interval.takeWhile( _ => this.isFinished)
            .do( i => this.curr +=0.1 )
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
