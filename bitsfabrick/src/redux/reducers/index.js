import { combineReducers } from 'redux';
import plots from './plotReducer';

const rootReducer = combineReducers({
    plotsState: plots
});

export default rootReducer;