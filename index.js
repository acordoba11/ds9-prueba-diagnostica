const form = document.getElementById('form');
form.addEventListener('submit', fetchPokemon);

async function fetchPokemon(e) {
    e.preventDefault();
    const name = document.getElementById('name');
    const rawResponse = await fetch(`https://pokeapi.co/api/v2/pokemon/${name.value}`);
    // waits until the request completes...
    const response = await rawResponse.json();
    console.log(response.id);
}
