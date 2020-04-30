import { Action } from './actions/types';

export type ReducerHandler<State, Payload> = (
  state: State,
  payload: Payload
) => State;

export type ReducerMap<State, ActionType> = ActionType extends Action<
  infer Type,
  infer Payload
>
  ? { [Key in Type]: ReducerHandler<State, Payload> }
  : never;
