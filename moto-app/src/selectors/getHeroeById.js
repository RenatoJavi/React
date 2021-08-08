import React from 'react'

import {heroesDatos} from '../data/heroesDatos';

export const getHeroeById = (id) => {
    

    return heroesDatos.find(hero=>hero.id===id);
}
