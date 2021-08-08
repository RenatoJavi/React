import React from 'react'
import {getHeroeById} from '../../selectors/getHeroeById'
import {HeroesCard} from './HeroesCard'
export const HeroesFotos = ({id}) => {

    getHeroeById(id);
    return (
        <div className="card-columns">
            {  
                getHeroeById(id).map(hero=>(< HeroesCard key={hero.id} {...hero}  />))
            
            
            
            }
                
        
        </div>
    )
}
