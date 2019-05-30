import { takeEvery, put, all } from 'redux-saga/effects';
import * as types from '../actions/actionTypes';
import { getPlanets } from '../../services/starWarsService';
import { getPlanetsSuccess } from '../../redux/actions/plotActions';

export function* callGetPlanets(){
   const resp = yield getPlanets('tat');
   yield put(getPlanetsSuccess(resp.results));

}

export function* watchGetPlanets() {
    yield takeEvery(types.GET_PLANETS, callGetPlanets)
}

export default function* rootSaga() {
    yield all([
        watchGetPlanets()
    ])
}