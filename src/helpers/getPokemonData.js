import axios from "axios"

const url = `https://pokeapi.co/api/v2/pokemon/`;

export const getPokemonData = async (id) => {
    const res = await axios.get(url + id);
    return res;
}