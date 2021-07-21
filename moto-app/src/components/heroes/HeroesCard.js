import React from 'react';

import { PropTypes } from 'prop-types';

export const HeroesCard = ({
         id,
        superhero,
        publisher,
        alter_ego,

        first_appearance,
        characters,
    }) => {
    return (
    
        <div className="card ms-3" style={{maxWindth:540}}>
        <div className="row no-gutters">
            <div className="col-md-4"> 
            
            <img className="card-img-top"  src="./Wally.jpeg" alt="suer heroe"></img>
        
        
              </div>
        </div>
    </div>    
    )

    
}



export default HeroesCard
/* <img src={`../../assets/heroes/${id}.jpg`} className="card-img" alt={superhero}/> 

<img  className="card-img-top"  src={ `../../assets/heroes/${id}.jpg`} alt={superhero}  />

*/