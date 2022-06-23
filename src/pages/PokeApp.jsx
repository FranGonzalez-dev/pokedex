import { useEffect, useState } from "react";
import { getPokemonData } from "../helpers/getPokemonData";

import { PokeCard } from "../components/PokeCard";
import styles from '../scss/modules/PokeApp.module.scss'

export const PokeApp = () => {
    const [pokemon, setPokemon] = useState([]);

    const getPokemonList = async () => {
        let pokemonArray = [];
        for(let i = 1; i < 152; i++) {
            pokemonArray.push(await getPokemonData(i));
        }
        setPokemon(pokemonArray);
    }
        
    useEffect(() => {
        getPokemonList();
    }, []);

return (
    <div className={styles.pokeApp}>
        <h1 className={styles.title}>PokeApp</h1>
        <div className={styles.grid}>
            {pokemon.map( poke => (
                <PokeCard pokemon={poke.data} key={poke.data.name}/>
            ))}
        </div>
    </div>
) }
