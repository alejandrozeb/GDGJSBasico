//const y otras propiedades

/* const nombre = 'Alejandro';
      nombre = 'Javier'; */
//al intentar cambiar una variable const sale un error que es normal por el tipo de dato


const numeros = [1,2,3];
numeros[0] = 4;
//si se puede modificar de esta forma

numeros.push(5);
/* con const no puedes modificar reasignando directamente pero si individualmente o mediante las funciones propieas del tipo de dato */

console.log(numeros);
//No es recomendable cambiar la naturaleza de la variable pero podemos ver lo flexible que puede ser javascript