import { Action, createReducer, on } from '@ngrx/store';
import {
  decrementar,
  dividir,
  incrementar,
  multiplicar,
  reset,
} from './contador.actions';

export const initialState = 10;

//usando create state
const _contadorReducer = createReducer(
  initialState,
  on(incrementar, (state) => state + 1),
  on(decrementar, (state) => state - 1),
  on(multiplicar, (state, payload) => state * payload.numero),
  on(dividir, (state, { numero }) => state / numero), //usando desestructuración
  on(reset, () => initialState)
);

export function contadorReducer(state: number = initialState, action: Action) {
  return _contadorReducer(state, action);
}
