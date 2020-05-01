import { Action } from './actions/types';

export const defaultHandler = <State extends object, ActionType extends Action>(
  key: keyof State
) => (state: State, payload: Action['payload']) => ({
  ...state,
  [key]: payload,
});
