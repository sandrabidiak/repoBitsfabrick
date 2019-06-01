const baseUrl = 'https://swapi.co/api/';

export function getPlanets(name){
    return fetch(baseUrl + 'planets/?search=' + name)
    .then(
        resp => resp.json()
    );
}

export function getCharacters(name){
    return fetch(baseUrl + 'people/?search=' + name)
    .then(
        resp => resp.json()
    );
}

