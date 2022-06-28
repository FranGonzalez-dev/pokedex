import { Link } from "react-router-dom";
import { TypeIcons } from './TypeIcons';

import styles from '../scss/modules/PokeCard.module.scss';

export const PokeCard = ({ pokemon }) => {

    const pokeType = pokemon.types[0].type.name;
    const pokeImage = pokemon.sprites.other.dream_world.front_default;


return (
    <Link to={`/pokemon/${pokemon.id}`}>
        <div className={`${styles.cardContainer}`}>
            <div className={styles.image}>
                <img src={ pokeImage } alt={ pokemon.name } />
            </div>
            <div className={`${pokeType} ${styles.card}`}>
                <p className={styles.id}>
                    { pokemon.id }
                </p>
                <h2>
                    { pokemon.name }
                </h2>
                <div className={ styles.typesContainer }>
                { pokemon.types.map( t => (
                    <TypeIcons type={ t.type.name } key={ t.type.name }/>
                ))}
                </div>  
            </div>
        </div>
    </Link>   
)}
