import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState } from './../../state/app.state';
import { customIncrement, updateChannel } from './../state/counter.actions';
import { getChannel } from './../state/counter.selectors';

@Component({
  selector: 'app-custom-increment-counter',
  templateUrl: './custom-increment-counter.component.html',
  styleUrls: ['./custom-increment-counter.component.scss']
})
export class CustomIncrementCounterComponent implements OnInit {
  increment: number;
  channel$: Observable<string>;
  constructor(private store: Store<AppState>) { }

  ngOnInit() {
    this.channel$ = this.store.select(getChannel);
  }

  add() {
    this.store.dispatch(customIncrement({ value: +this.increment }));
  }

  update() {
    this.store.dispatch(updateChannel({ name: 'Dotnet Dev' }));
  }
}
