const baseUrl = 'https://swapi.co/api/';

export function getPlanets(name){
    return fetch(baseUrl + 'planets/?search=' + name).then(
        resp => resp.json()
    );
}

