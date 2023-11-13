import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.reducers';

@Component({
  selector: 'app-hijo',
  templateUrl: './hijo.component.html',
})
export class HijoComponent implements OnInit{
  contador: number = 0
  constructor(private store: Store<AppState>){

  }
  ngOnInit(): void {
    this.store.select('contador').subscribe(cont => this.contador = cont)
  }

  dividir() {
    
  }

  multiplicar() {

  }

}
