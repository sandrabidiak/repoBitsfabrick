import * as types from '../actions/actionTypes';

export default function plotReducer (
    state = { 
        idCounter: 1, 
        plots:[], 
        planetsSearchResult:[],
        charactersSearchResult:[]  
    }, 
        action
    ) {
    let newState;
    switch(action.type) {
        case types.ADD_PLOT: 
            const newPlot = Object.assign({}, action.plot, { id: state.idCounter });
            const newPlots = [...state.plots, newPlot];
            const newCounter = state.idCounter+1;
        
            newState = Object.assign({} , state, { plots: newPlots, idCounter: newCounter });
            return newState;
        case types.GET_PLANETS_SUCCESS:
            newState = Object.assign({} , state, { planetsSearchResult: action.planets });
            return newState;
        case types.GET_CHARACTERS_SUCCESS:
            newState = Object.assign({} , state, { charactersSearchResult: action.characters });
            return newState;
        default: 
            return state;            
    }
}