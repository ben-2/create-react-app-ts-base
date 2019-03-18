import reducer from '.';
import { types, CounterState } from '.';

describe('reducer/counter', () => {
    let initialState: CounterState;
    beforeEach(() => {
        initialState = {
           counter: 0
        };
    });

    it('should return the initial state', () => {
        expect(reducer(undefined, {type:''})).toEqual(initialState);
    });

    it('should increment the counter', () => {
        const action = {
            type: types.COUNTER.INCREMENT,
        };
        expect(reducer(initialState, action)).toEqual({
            ...initialState,
            counter: 1
        });
    });
    it('should decrement the counter', () => {
        const action = {
            type: types.COUNTER.DECREMENT,
        };
        expect(reducer(initialState, action)).toEqual({
            ...initialState,
            counter: -1
        });
    });
});
