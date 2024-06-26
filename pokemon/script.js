document.getElementById('fetchPokemonBtn').addEventListener('click', fetchPokemonInfo);

function fetchPokemonInfo() {
    const pokemonNameOrId = document.getElementById('pokemonInput').ariaValueMax.toLowerCase();
    const url = `https://pokeapi.co/api/v2/pokemon/${pokemonNameOrId}/`;

    fetch(url)
    .then(response => {
        if(!response.ok) {
            throw new Error(`Error: ${response.status} -${response.statusText}`);
        }
        return response.json();
    })
    .catch(error => {
        console.error('Error fetching Pokemon data:', error);
        displayError(error);
    });
}

function displayPokemonInfo(data) {
    const pokemonInfoDiv = document.getElementById('pokemonInfo');
    pokemonInfoDiv.innerHTML = `
    <h2>${data.name}</h2>
    <img src="${data.sprites.front_default}" alt"${data.name}">
    <p><strong>Height:</strong> ${data.height} decimetres</p>
    <p><strong>Weight:</strong> ${data.weight} hectograms</p>
    `;
}
function displayError(error) {
    const pokemonInfoDiv = document.getElementById('pokemonInfo');
    pokemonInfoDiv.innerHTML = `<p>Error: ${error.message} </p>`;
}