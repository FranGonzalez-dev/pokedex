import bug from '../img/icons/bug.svg'
import dark from '../img/icons/dark.svg'
import dragon from '../img/icons/dragon.svg'
import electric from '../img/icons/electric.svg'
import fairy from '../img/icons/fairy.svg'
import fighting from '../img/icons/fighting.svg'
import fire from '../img/icons/fire.svg';
import flying from '../img/icons/flying.svg'
import ghost from '../img/icons/ghost.svg'
import grass from '../img/icons/grass.svg';
import ground from '../img/icons/ground.svg'
import ice from '../img/icons/ice.svg'
import normal from '../img/icons/normal.svg'
import poison from '../img/icons/poison.svg'
import psychic from '../img/icons/psychic.svg'
import rock from '../img/icons/rock.svg'
import steel from '../img/icons/steel.svg'
import water from '../img/icons/water.svg'


export const TypeIcons = ({ type }) => (
    <div>
        {
            type === 'bug' ? <img src={bug} alt="type"/>
            : type === 'dark' ? <img src={ dark } alt="type" />
            : type === 'dragon' ? <img src={ dragon } alt="type" />
            : type === 'electric' ? <img src={ electric } alt="type" />
            : type === 'fairy' ? <img src={ fairy } alt="type" />
            : type === 'fighting' ? <img src={ fighting } alt="type" />
            : type === 'fire' ? <img src={ fire } alt="type" />
            : type === 'flying' ? <img src={ flying } alt="type" />
            : type === 'ghost' ? <img src={ ghost } alt="type" />
            : type === 'grass' ? <img src={ grass } alt="type" />
            : type === 'ground' ? <img src={ ground } alt="type" />
            : type === 'ice' ? <img src={ ice } alt="type" />
            : type === 'normal' ? <img src={ normal } alt="type" />
            : type === 'poison' ? <img src={ poison } alt="type" />
            : type === 'psychic' ? <img src={ psychic } alt="type" />
            : type === 'rock' ? <img src={ rock } alt="type" />
            : type === 'steel' ? <img src={ steel } alt="type" />
            : type === 'water' ? <img src={ water } alt="type" />
            : <p>Unknown</p>
        }
    </div>
)