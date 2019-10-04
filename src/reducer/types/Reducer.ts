import Action from '../../actions/interfaces/Action';
import { ReducerHandler } from './ReducerHandler';

export type Reducer<Actions extends Action<any>, State> = {
    [key in keyof Actions['type']]: ReducerHandler<State>;
}
