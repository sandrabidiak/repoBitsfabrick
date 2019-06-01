import { takeEvery, put, all } from 'redux-saga/effects';
import * as types from '../actions/actionTypes';
import { getPlanets, getCharacters } from '../../services/starWarsService';
import { getPlanetsSuccess, getCharactersSuccess } from '../../redux/actions/plotActions';

export function* callGetPlanets(action){
   const resp = yield getPlanets(action.planetName);
   yield put(getPlanetsSuccess(resp.results));
}

export function* watchGetPlanets() {
    yield takeEvery(types.GET_PLANETS, callGetPlanets)
}

export function* callGetCharacters(action){
    const resp = yield getCharacters(action.characterName);
    yield put(getCharactersSuccess(resp.results));
}
 
export function* watchGetCharacters() {
    yield takeEvery(types.GET_CHARACTERS, callGetCharacters)
}

export default function* rootSaga() {
    yield all([
        watchGetPlanets(),
        watchGetCharacters()
    ])
}
