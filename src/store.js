import { createStore } from 'redux';

const initialState = { 
    currentValue: 0,
    futureValues: [],
    previousValues: []
};

export const INCREMENT = 'INCREMENT';
export const DECREMENT = 'DECREMENT';

export const UNDO = 'UNDO';
export const REDO = 'REDO';

function reducer(state = initialState, action){
    switch (action.type) {
        case INCREMENT: 
            return {currentValue = state.currentValue + action.payload};
        case DECREMENT: 
            return {currentValue = state.currentValue - action.payload};
        default: 
            return state;
    } 
}

export default createStore(reducer);