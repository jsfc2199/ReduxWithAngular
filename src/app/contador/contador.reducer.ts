import { Action, createReducer, on } from '@ngrx/store';
import * as fromContador  from './contador.actions';

export const initialState = 10;

//usando create state
const _contadorReducer = createReducer(
  initialState,
  on(fromContador.incrementar, (state) => state + 1),
  on(fromContador.decrementar, (state) => state - 1),
  on(fromContador.multiplicar, (state, payload) => state * payload.numero),
  on(fromContador.dividir, (state, { numero }) => state / numero), //usando desestructuración
  on(fromContador.reset, () => initialState)
);

export function contadorReducer(state: number = initialState, action: Action) {
  return _contadorReducer(state, action);
}
