import { Link } from "react-router-dom";
import styles from '../scss/modules/PokeCard.module.scss';

export const PokeCard = ({ pokemon }) => {

    const pokeType = pokemon.types[0].type.name;
    const pokeImage = pokemon.sprites.front_default;


return (
    <Link to={`/pokemon/${pokemon.id}`}>
        <div className={`${styles.card} ${pokeType}`}>
            <div className={styles.info}>
                <p>{pokemon.id}</p>
                <h2>{pokemon.name}</h2>
            </div>
            <div className={styles.image}>
                <img src={pokeImage} alt={pokemon.name} />
            </div>
        </div>
    </Link>   
)}
