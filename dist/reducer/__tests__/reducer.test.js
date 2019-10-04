import reducer from '../index';
const handlers = {
    SetTest: (state, isTest) => (Object.assign(Object.assign({}, state), { isTest })),
    SetVersion: (state, version) => (Object.assign(Object.assign({}, state), { version })),
};
let state;
describe('reducer', () => {
    beforeEach(() => {
        state = {
            version: '1.0',
            isTest: true
        };
    });
    it('Should return state if no actions is passed', () => {
        const result = reducer(handlers, state);
        expect(result(state, {})).toEqual(state);
    });
    it('SetTest action', () => {
        const result = reducer(handlers, state);
        const action = {
            type: 'SetTest',
            payload: false
        };
        const newStore = result(state, action);
        expect(newStore.isTest).toBeFalsy();
    });
    it('SetVersion action', () => {
        const result = reducer(handlers, state);
        const action = {
            type: 'SetVersion',
            payload: '1.0.1'
        };
        const newStore = result(state, action);
        expect(newStore.version).toEqual(action.payload);
    });
});
//# sourceMappingURL=reducer.test.js.map