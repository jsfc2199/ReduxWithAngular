import { Action, createReducer, on } from '@ngrx/store';
import { decrementar, incrementar } from './contador.actions';


export const initialState = 10;

//usando create state
const _contadorReducer = createReducer(initialState,
  on(incrementar, state => state + 1),
  on(decrementar, state => state - 1),

  )
export function contadorReducer(state: number  = initialState, action: Action){
  return _contadorReducer(state,action)
}
