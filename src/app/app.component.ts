import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Counter } from 'src/models/counter.model';

import * as ConuterActions from './ngrx/actions/counter.action'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  // title = 'Caculator';

  // count$: Observable<Counter>;

  // constructor(private store : Store<{counter : Counter}>){
  //   this.count$ = store.select('counter');
  // }

  // increase(){
  //   this.store.dispatch(ConuterActions.increment());
  // };
  // decrease(){
  //   this.store.dispatch(ConuterActions.decrement());
  // };
  // reset(){
  //   this.store.dispatch(ConuterActions.reset());
  // };

  
}
