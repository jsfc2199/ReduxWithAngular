import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.reducers';
import * as actions from '../contador.actions';

@Component({
  selector: 'app-hijo',
  templateUrl: './hijo.component.html',
})
export class HijoComponent implements OnInit {
  contador: number = 0;
  constructor(private store: Store<AppState>) {}
  ngOnInit(): void {
    this.store.select('contador').subscribe((cont) => (this.contador = cont));
  }

  dividir() {
    this.store.dispatch(actions.dividir({ numero: 2 })); //enviamos el objeto con el numero
  }

  multiplicar() {
    this.store.dispatch(actions.multiplicar({ numero: 3 })); //enviamos el objeto con el numero
  }
}
