const baseUrl = 'https://swapi.co/api/';

export async function getPlanets(name){
    /* 
    return fetch(baseUrl + 'planets/?search=' + name)
    .then(
        resp => resp.json()
    ) 
    */

    const response = await fetch(baseUrl + 'planets/?search=' + name)
    return response.json()
}

export async function getCharacters(name){
    /*
    return fetch(baseUrl + 'people/?search=' + name)
    .then(
        resp => resp.json()
    );
    */

    const response = await fetch(baseUrl + 'people/?search=' + name)
    return response.json()
}

