import { Action } from '@ngrx/store';
import { decrementar, incrementar } from './contador.actions';

export const initialState = 10;

export function contadorReducer(state = initialState, action: Action) {
  switch (action.type) {
    case incrementar.type:
      return (state + 1);
    case decrementar.type:
      return (state - 1);
    default:
      return state;
  }
}
