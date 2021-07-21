import React from 'react'
import { getHeroeByPublisher } from '../../selectors/getHeroeByPublisher'
import {HeroesCard} from './HeroesCard'

export const HeroLists = ({publisher}) => {
    //aplico desestruturacion para trae el atributo 'publisher' de la

getHeroeByPublisher(publisher);//traigo el dato publisher de c/u de los heroes


    return (             
            <div className="card-columns">            
            {
                       
                   getHeroeByPublisher(publisher).map(  hero=>(<HeroesCard  key={hero.id} {...hero}> </HeroesCard>))
            }
            </div>
      
    )
}

//Me Filtra 'Filter' TODOS LOS SUPER HEROES, DE DC Y Marvel 
    /* {heroes.map(hero=>(
                          <li key={hero.id}> {hero.superhero}</li>

            ))} */