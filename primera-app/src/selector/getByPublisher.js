import { heroes } from "../data/DatosHeroes";



export const getByPublisher = (publisher) => {

const validarPublisher=['DC Comics','Marvel Comics']
if(!validarPublisher.includes(publisher)){

    throw new Error (`Publisher "${publisher}", error no es correcto`)
    
}

return heroes.filter(hero=>hero.publisher===publisher)
//voy a retornar todos los heros, ssi los hero.publiser 
//sean igual al publiser que me estan mandando como argumento
}
