import * as types from './actionTypes';

export function addPlot(plot) {
    return { type: types.ADD_PLOT, plot: plot };
}

export function getPlanets(planetName) {
    return { type: types.GET_PLANETS, planetName: planetName};
}

export function getPlanetsSuccess(planets) {
    return { type: types.GET_PLANETS_SUCCESS, planets: planets};
}

export function getCharacters(characterName) {
    return { type: types.GET_CHARACTERS, characterName: characterName};
}

export function getCharactersSuccess(characters) {
    return { type: types.GET_CHARACTERS_SUCCESS, characters: characters};
}
