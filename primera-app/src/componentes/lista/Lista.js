import React from 'react'
import { getByPublisher } from '../../selector/getByPublisher';
import { Tarjetas, tarjetas } from '../heroes/tarjetas';



export const Lista = ({publisher}) => {

    const heroes=getByPublisher(publisher);
    return (       

      
        <div className="card-columns" >
                {
                heroes.map(hero=>(

                     <Tarjetas key={hero.id}{...hero}></Tarjetas>
                  

                ))


                }
        
        </div>




     
    )
}
