import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

import { getPokemonData, getPokemonSpecies } from '../helpers';
import { TypeIcons } from '../components';
import { ProgressBar } from 'react-bootstrap';

import styles from '../scss/modules/PokeDetails.module.scss'


export const PokeDetails = () => {

    const [ pokemon, setPokemon ] = useState();
    const [species, setSpecies] = useState();
    const [ loading, setLoading ] = useState(true);
    
    const { id } = useParams();

    const getPokemon = async (id) => {
        const details = await getPokemonData(id);
        const species = await getPokemonSpecies(id);
        setPokemon(details.data);
        setSpecies(species.data);
        setLoading(false);
    }
    
    useEffect(() => {
        getPokemon(id);
    }, [id]);

    const navigate = useNavigate();
    
return (
<>
{ loading ? <p>loading</p>
: (
    <div className={`${pokemon.types[0].type.name}`}>
        <div className={styles.PokeDetails}>

            <button onClick={()=> navigate(-1)} className='button'>
                Atrás
            </button>
            

            <div className={styles.header}>
                <p className={styles.id}>
                    #{pokemon.id}
                </p>
                <h1>{pokemon.name}</h1>
                <div className={styles.typesContainer}>
                    {pokemon.types.map( t => (
                        <div  
                        className={styles.type} 
                        key={t.type.name}>
                            <TypeIcons type={ t.type.name }/>
                            <p>{t.type.name}</p>
                        </div>
                    ) 
                    ) }
                </div>
            </div>
            <div className={styles.details}>

                <div className={styles.containerImg}>
                    <img src={pokemon.sprites.other.dream_world.front_default} alt={pokemon.name}/>
                </div>


                <h2>About</h2>

                <p>{species.flavor_text_entries[0].flavor_text}</p>
                <p>{species.generation.name}</p>
                <p> Height: { pokemon.height / 10}mt </p>
                <p> Weight { pokemon.weight / 10 }kg </p>
                
                
                {   pokemon.abilities.map( a => {
                        return (
                            <p> {a.ability.name} </p>
                        )
                    })
                }
                
                <div>
                    <h2>Stats</h2>
                    {pokemon.stats.map( s =>  (
                        <div className={styles.stats} key={s.stat.name}>
                            <p>{s.stat.name}</p>
                            <ProgressBar now={s.base_stat} max={255} label={s.base_stat}/>
                        </div>
                    )
                    )}
                </div>
                
                
            </div>

        </div>
    </div>
    
    )}
</>
)}
