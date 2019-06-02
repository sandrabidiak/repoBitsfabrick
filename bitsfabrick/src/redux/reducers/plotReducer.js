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

        case types.UPDATE_PLOT:
            const updatedPlots = state.plots.map(
                plot => {
                    if(plot.id === action.plot.id) {
                        return action.plot;
                    } else {
                        return plot;
                    }     
                }    
            );
            newState = Object.assign({} , state, { plots: updatedPlots });
            return newState;

        case types.DELETE_PLOT:
            const filteredPlots = state.plots.filter (
                plot => plot.id !== action.id
            )
            newState = Object.assign({} , state, { plots: filteredPlots });
            return newState;        

        case types.GET_PLANETS_SUCCESS:
            newState = Object.assign({} , state, { planetsSearchResult: action.planets });
            return newState;

        case types.RESET_PLANETS:
            newState = Object.assign({} , state, { planetsSearchResult: [] });
            return newState;

        case types.RESET_CHARACTERS:
            newState = Object.assign({} , state, { charactersSearchResult: [] });
            return newState;

        case types.GET_CHARACTERS_SUCCESS:
            newState = Object.assign({} , state, { charactersSearchResult: action.characters });
            return newState;

        default: 
            return state;            
    }
}