import {leerSuperheroes,agregarSuperheroes} from './utils.mjs';
const archivoOriginal= './superheroes.txt';
const archivoNuevos = './agregarSuperheroes.txt';


//Agregar nuevos super
agregarSuperheroes(archivoOriginal, archivoNuevos);



//leer y mostar la lista actualizada y ordenada
const superheroes = leerSuperheroes(archivoOriginal);
console.log('Superheroes ordenados:');
console.log(superheroes);