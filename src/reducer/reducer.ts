import { ReducerMap } from './types';
import { Action } from './actions/types';

export const mapReducer = <State, Actions extends Action<any>>(
  handlers: ReducerMap<State, Actions>,
  initialState: State
) => (state: State = initialState, action?: Action<any>): State => {
  if (!action) {
    return state;
  }

  if (!action.type || !handlers[action.type]) {
    return state;
  }

  return handlers[action.type](state, action.payload);
};
