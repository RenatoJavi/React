import React from 'react'
import { HeroLists } from '../heroes/HeroesLists'

export const DcScreen = () => {
   
    return (
        <div>
            <h1>Dc screen</h1>
            <hr/>
           
          <HeroLists publisher="DC Comics" ></HeroLists>

        </div>
    )
}
