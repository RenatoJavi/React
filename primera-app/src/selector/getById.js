import { heroes } from "../data/DatosHeroes";



export const getById = (id) => {


return heroes.filter(hero=>hero.id===id)
//voy a retornar todos los heros, ssi los hero.id 
//sean igual al id que me estan mandando como argumento
}
