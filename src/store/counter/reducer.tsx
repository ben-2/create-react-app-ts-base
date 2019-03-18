import { types, CounterActionTypes, CounterState } from ".";

const initialState: CounterState = {
    counter: 0,
};

const counterReducer = (state = initialState, action: CounterActionTypes): CounterState => {
    switch ( action.type ) {
        case types.COUNTER.INCREMENT : {
            return {...state, counter: state.counter + 1}
        }
        case types.COUNTER.DECREMENT : {
            return {...state, counter: state.counter - 1}
        }
        default:
            return state;
    }
};

export default counterReducer;