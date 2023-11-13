import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.reducers';
import { reset } from '../contador.actions';

@Component({
  selector: 'app-nieto',
  templateUrl: './nieto.component.html',
})
export class NietoComponent implements OnInit {
  contador: number = 0;

  constructor(private store: Store<AppState>) {}
  ngOnInit(): void {
    this.store.select('contador').subscribe((cont) => (this.contador = cont));
  }

  reset() {
    this.store.dispatch(reset());
  }
}
