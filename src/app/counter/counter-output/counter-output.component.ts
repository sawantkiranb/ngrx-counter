import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState } from './../../state/app.state';
import { getCounter } from './../state/counter.selectors';

@Component({
  selector: 'app-counter-output',
  templateUrl: './counter-output.component.html',
  styleUrls: ['./counter-output.component.css']
})
export class CounterOutputComponent implements OnInit {
  counter: number;
  counter$: Observable<number>;

  constructor(private store: Store<AppState>) { }

  ngOnInit() {
    this.counter$ = this.store.select(getCounter);
  }
}
