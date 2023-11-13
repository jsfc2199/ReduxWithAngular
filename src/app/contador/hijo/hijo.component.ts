import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-hijo',
  templateUrl: './hijo.component.html',
})
export class HijoComponent {
  @Input() contador!: number;
  @Output() cambioContador = new EventEmitter<number>()

  dividir() {
    this.contador /= 2;
    this.cambioContador.emit(this.contador)
  }

  multiplicar() {
    this.contador *= 2;
    this.cambioContador.emit(this.contador)
  }
}
