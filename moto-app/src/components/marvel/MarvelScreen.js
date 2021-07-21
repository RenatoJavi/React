import React from 'react'
import { HeroLists } from '../heroes/HeroesLists'

export const MarvelScreen = () => {
    return (
        <div>
            <h1> Marvel screen</h1>
            <hr/>

            <HeroLists  publisher="Marvel Comics" /> 
            {/* HeroesLists es un componente */}
        </div>
    )
}
