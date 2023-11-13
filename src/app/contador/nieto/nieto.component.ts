import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-nieto',
  templateUrl: './nieto.component.html',
})
export class NietoComponent {
  @Input() contador!: number;
  @Output() contadorCambio = new EventEmitter<number>()

  reset(){
    this.contador = 0
    this.contadorCambio.emit(this.contador)
  }
}
