import reducer from '../index';
import ActionWithPayload from '../../actions/interfaces/ActionWithPayload';
import { ReducerHandlers } from '../types/ReducerHandlers';

interface MockState
{
    version: string;
    isTest: boolean;
}

interface SetVersion extends ActionWithPayload<'SetVersion', string>
{
}

interface SetTest extends ActionWithPayload<'SetTest', boolean>
{
}

type MockActions = SetVersion | SetTest;

const handlers: ReducerHandlers<MockActions, MockState> = {
    SetTest:    ( state, isTest: boolean ) => ( {
        ...state,
        isTest
    } ),
    SetVersion: ( state, version: string ) => ( {
        ...state,
        version
    } ),
};

let state: MockState;

describe( 'reducer', () =>
{
    beforeEach( () =>
    {
        state = {
            version: '1.0',
            isTest:  true
        }
    } );

    it( 'Should return state if no actions is passed', () =>
    {
        const result = reducer( handlers, state );

        expect( result( state, {} as any ) ).toEqual( state );
    } );

    it( 'SetTest action', () =>
    {
        const result = reducer( handlers, state );
        const action: SetTest = {
            type:    'SetTest',
            payload: false
        };
        const newStore = result( state, action );

        expect( newStore.isTest ).toBeFalsy();
    } );

    it( 'SetVersion action', () =>
    {
        const result = reducer( handlers, state );
        const action: SetVersion = {
            type:    'SetVersion',
            payload: '1.0.1'
        };
        const newStore = result( state, action );

        expect( newStore.version ).toEqual(action.payload);
    } )
} );
