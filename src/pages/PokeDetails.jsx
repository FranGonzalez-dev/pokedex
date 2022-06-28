import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

import { getPokemonData } from '../helpers';
import { TypeIcons } from '../components';

import styles from '../scss/modules/PokeDetails.module.scss'


export const PokeDetails = () => {

    const [ pokemon, setPokemon ] = useState();
    const [ loading, setLoading ] = useState(true);
    
    const { id } = useParams();

    const getPokemon = async (id) => {
        const details = await getPokemonData(id);
        setPokemon(details.data);
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
                <p>{}</p>
                <div className='stats-container'>                    
                    {pokemon.stats.map( s => {
                    return (
                        <div className='stats' key={s.stat.name}>
                            <p><span>{s.stat.name}:</span> {s.base_stat}</p>
                        </div>
                    )
                    })}
                </div>                
            </div>

        </div>
    </div>
    
    )}
</>
)}
