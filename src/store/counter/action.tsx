import { types, IncrementAction, DecrementAction } from '.';

export const increment = (): IncrementAction => ({
    type: types.COUNTER.INCREMENT
});

export const decrement = (): DecrementAction => ({
    type: types.COUNTER.DECREMENT
});

