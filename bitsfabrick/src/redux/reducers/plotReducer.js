import * as types from '../actions/actionTypes';

export default function plotReducer (state = { plots:[], planetsSearchResult:[] }, action) {
    let newState;
    switch(action.type) {
        case types.ADD_PLOT: 
            const newPlots = [...state.plots, action.plot];
            newState = Object.assign({} , state, { plots: newPlots });
            return newState;
        case types.GET_PLANETS_SUCCESS:
            newState = Object.assign({} , state, { planetsSearchResult: action.planets });
            return newState;
        default: 
            return state;            
    }
}