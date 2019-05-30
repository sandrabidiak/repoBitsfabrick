import { combineReducers } from 'redux';
import plotReducer from './plotReducer';

const rootReducer = combineReducers({
    plotsState: plotReducer
});

export default rootReducer;