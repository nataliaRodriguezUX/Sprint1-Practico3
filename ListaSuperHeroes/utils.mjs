import fs from 'fs'
//clase para superhéroe
class Superheroe{
    constructor(id, nombreSuperheroe, nombreReal, nombreSociedad, edad,
        planetaOrigen, debilidad, poder, habilidadEspecial, aliado, enemigo ){
    this.id= id;
    this.nombreSuperheroe = nombreSuperheroe;
    this.nombreReal = nombreReal;
    this.nombreSociedad =nombreSociedad;
    this.edad= edad;
    this.planetaOrigen=planetaOrigen; 
    this.debilidad=debilidad;
    this.poder =poder;
    this.habilidadEspecial= habilidadEspecial;
    this.aliado=aliado;
    this.enemigo =enemigo;
    }
}

//Leer y ordenar los superhéroes
export function leerSuperheroes(ruta){
    const datos = fs.readFileSync(ruta, 'utf8');
    const superheroesArray = JSON.parse(datos);

    //convertir a instancias de superheroes
    const superheroes = superheroesArray.map(
    hero=> new Superheroe (hero.id, hero.nombreSuperheroe, hero.nombreReal,
           hero.nombreSociedad, hero.edad, hero.planetaOrigen, hero.debilidad, hero.poder,
           hero.habilidadEspecial, hero.aliado, hero.enemigo)   
    );

    //ordenar por nombre de superheroe
    superheroes.sort((a,b)=> a.nombreSuperheroe.localeCompare(
           b.nombreSuperheroe));

    return superheroes;
}


//nueva funcion para agregar superhéroes
export function agregarSuperheroes(rutaOriginal,rutaNuevos) {
    const datosOriginales = fs.readFileSync(rutaOriginal, 'utf8');
    const datosNuevos= fs.readFileSync(rutaNuevos, 'utf8');

    const superheroesOriginales =JSON.parse(datosOriginales);
    const nuevosSuperheroes  = JSON.parse(datosNuevos);

    //convertir los nuevos superheroes a instancias de superheroes
    const instanciasNuevos= nuevosSuperheroes.map(
        hero=> new Superheroe(hero.id, hero.nombreSuperheroe, hero.nombreReal,
        hero.nombreSociedad, hero.edad, hero.planetaOrigen, hero.debilidad, hero.poder,
        hero.habilidadEspecial, hero.aliado, hero.enemigo)
    );

    //Combinar listas
    const listaActualizada =  [...superheroesOriginales, ...instanciasNuevos];

    //Guardas listas
    fs.writeFileSync(rutaOriginal, JSON.stringify(listaActualizada, null,2),'utf8');
    console.log('Lista de Superheroes actualizada con éxito');
}