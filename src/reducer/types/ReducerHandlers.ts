import Action from '../../actions/interfaces/Action';
import { ReducerHandler } from './ReducerHandler';

export type ReducerHandlers<Actions extends Action<any>, State> = Record<Actions['type'], ReducerHandler<State> >
