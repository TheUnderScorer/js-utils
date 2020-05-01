import { ReducerMap } from './types';
import { mapReducer } from './reducer';
import { Action } from './actions/types';
import { defaultHandler } from './handlers';

interface MockState {
  version: string;
  isTest: boolean;
}

type MockActions = Action<'SetVersion', string> | Action<'SetTest', boolean>;

const handlers: ReducerMap<MockState, MockActions> = {
  SetTest: defaultHandler<MockState, MockActions>('isTest'),
  SetVersion: (state, version) => ({
    ...state,
    version,
  }),
};

let state: MockState;

describe('Map reducer', () => {
  beforeEach(() => {
    state = {
      version: '1.0',
      isTest: true,
    };
  });

  it('Should return state if no actions is passed', () => {
    const result = mapReducer(handlers, state);

    expect(result(state)).toEqual(state);
  });

  it('SetTest action', () => {
    const result = mapReducer(handlers, state);
    const action = {
      type: 'SetTest',
      payload: false,
    };
    const newStore = result(state, action);

    expect(newStore.isTest).toBeFalsy();
  });

  it('SetVersion action', () => {
    const result = mapReducer(handlers, state);
    const action = {
      type: 'SetVersion',
      payload: '1.0.1',
    };
    const newStore = result(state, action);

    expect(newStore.version).toEqual(action.payload);
  });

  it('should return state if invalid action was provided', () => {
    const result = mapReducer(handlers, state);
    const newStore = result(state, {
      type: 'invalidaction',
    } as any);

    expect(newStore).toEqual(state);
  });
});
