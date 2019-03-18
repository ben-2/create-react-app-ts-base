export type CounterState = {
    counter: number;
}

export const types = {
    COUNTER: {
        INCREMENT: "COUNTER.INCREMENT",
        DECREMENT: "COUNTER.DECREMENT"
    }
}

export interface IncrementAction {
    type: typeof types.COUNTER.INCREMENT
}

export interface DecrementAction {
    type: typeof types.COUNTER.DECREMENT
}

export interface UndefinedAction {
    type: string
}

export type CounterActionTypes = IncrementAction | DecrementAction | UndefinedAction
