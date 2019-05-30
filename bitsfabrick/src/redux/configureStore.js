import { createStore, applyMiddleware } from 'redux';
import rootReducer from './reducers';
import createSagaMiddleware from 'redux-saga';

import rootSaga from './sagas/planetSaga';

export default function configureStore(initialState) {
    const sagaMiddleware = createSagaMiddleware();
    const store = createStore(
        rootReducer, 
        initialState, 
        applyMiddleware(sagaMiddleware)
    );   
    sagaMiddleware.run(rootSaga);
    return store;
}
