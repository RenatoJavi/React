import heroes from "../data/heroes";


export let getHeroeById
=(id)=>heroes.find(idHeroe=>idHeroe.id===id);
for (let i = 0; i <=heroes.length ; i++) {
    console.log(getHeroeById(i));
}

export const  getHeroeByOwner=(ide)=>heroes.find(productor=>productor.id===ide && productor.owner==='DC');

for (let j = 0; j <heroes.length ; j++) {
    console.log(getHeroeByOwner(j));
}
const getProducto=heroes.filter(heroe=>heroe.owner==='DC');
console.log(getProducto);

const getProducto2=(owner)=>heroes.filter(heroe=>heroe.owner===owner);
console.log(getProducto2('Marvel'));