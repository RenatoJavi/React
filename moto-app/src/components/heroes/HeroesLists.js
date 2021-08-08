import React from 'react'
import { getHeroeByPublisher } from '../../selectors/getHeroeByPublisher'
import {HeroesCard} from './HeroesCard'

export const HeroLists = ({publisher}) => {
    //aplico desestruturacion para trae el atributo 'publisher'

getHeroeByPublisher(publisher);//traigo el dato publisher de c/u de los heroes
    

    return (             
            <div className="card-columns">            
            {
                       
                   getHeroeByPublisher(publisher)
                   .map(  hero=>(
                   <HeroesCard key={hero.id}  {...hero}  />))
            }
            </div>

      
    )
}