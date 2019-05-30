import * as types from './actionTypes';

export function addPlot(plot) {
    return { type: types.ADD_PLOT, plot: plot };
}

export function getPlanets(plot) {
    return { type: types.GET_PLANETS};
}

export function getPlanetsSuccess(planets) {
    return { type: types.GET_PLANETS_SUCCESS, planets: planets};
}
