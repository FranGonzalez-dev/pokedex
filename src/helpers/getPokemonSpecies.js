import axios from 'axios';

const url = `https://pokeapi.co/api/v2/pokemon-species/`

export const getPokemonSpecies = async(id) => {
    const res = await axios.get(url + id);
    return res;
}