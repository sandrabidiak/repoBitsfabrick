import { takeEvery, put, all, call, delay, fork, join, take } from 'redux-saga/effects';
import * as types from '../actions/actionTypes';
import { getPlanets, getCharacters } from '../../services/starWarsService';
import * as plotActions from '../actions/plotActions'
import { getPlanetsSuccess, getCharactersSuccess } from '../../redux/actions/plotActions';

export function* callGetPlanets(action) {
    try { 
        const resp = yield call(getPlanets, action.planetName)
        yield put(getPlanetsSuccess(resp.results));
    } catch(e) {
        console.log('Error: Could not fetch planets', e)
    }    
}

export function* watchGetPlanets() {
    yield takeEvery(types.GET_PLANETS, callGetPlanets)
}

export function* callGetCharacters(action){
    try{
        const resp = yield call(getCharacters, action.characterName);
        yield put(getCharactersSuccess(resp.results));
    } catch(e) {
        console.log('Error: Could not fetch characters', e)
    }
}
 
export function* watchGetCharacters() {
    yield takeEvery(types.GET_CHARACTERS, callGetCharacters)
}

/*
function* task() {
    try {
        let c = 0
        while (c < 10) {
            yield delay(1000)
            console.log('Task', c++)
        }
    } catch(e) {
        console.log(e)
    }
}

let loopTask
function* testSaga() {
    loopTask = yield fork(task)
    loopTask && (yield join(loopTask))
    yield call(task)
    yield put(plotActions.getPlanets(''))

    console.log('TZask started')
}
*/

export default function* rootSaga() {
    yield all([
        //testSaga(),
        watchGetPlanets(),
        watchGetCharacters()
    ])
}

