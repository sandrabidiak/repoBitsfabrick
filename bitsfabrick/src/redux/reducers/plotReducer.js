export default function plotReducer (state = { plots:[] }, action) {
    switch(action.type) {
        case "ADD_PLOT": 
            const newPlots = [...state.plots, action.plot];
            const newState = Object.assign({} , state, { plots: newPlots });
            return newState;
        default: 
            return state;            
    }
}