import { increment, decrement, types } from '.';

describe('reducer/counter', () => {
    it('should return the initial state', () => {
        expect(increment()).toEqual({
            type: types.COUNTER.INCREMENT
        });
    });
    it('should return the initial state', () => {
        expect(decrement()).toEqual({
            type: types.COUNTER.DECREMENT
        });
    });
});
