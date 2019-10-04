import Action from '../actions/interfaces/Action';
/**
 *  Builds reducer basing on provided handlers (that are connected to action types) and initial state
 * */
declare const reducer: <State, Actions extends Action<any>>(handlers: Record<Actions["type"], import("./types/ReducerHandler").ReducerHandler<State>>, initialState: State) => (state: State, action: Action<any>) => State;
export default reducer;
