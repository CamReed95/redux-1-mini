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
            return {currentValue = state.currentValue + action.payload,
                futureValues: [],
                previousValues: [state.currentValue, ...state.previousValues]
            };
        case DECREMENT: 
            return {currentValue = state.currentValue - action.payload,
            futureValues: [],
            previousValues: [state.currentValue, ... state.previousValues]
        };
        case UNDO:
            return {
                currentValue: state.previousValues[0],
                futureValues: [state.currentValue],
                previousValues: state.previousValues.slice(1)
            };
        case REDO: 
            return {
                currentValue: state.futureValues[0],
                futureValues: state.futureValues.slice(1),
                previousValues: [state.currentValues, ...state.previousValue]
            };
            
        default: 
            return state;
    } 
}

export default createStore(reducer);