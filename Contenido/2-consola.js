/* BLoque Comentario */
// Comentario una linea

//consola, Se puede identificar errores al codificar
//prompt("Cual es tu nombre");
//alert("Error");

//confirm('Deseas borrar ese elemento?');
//devuelve un como respuesta true o false

//como podemos saber que valor devuelve?
//respuestaConfirm = confirm('Deseas borrar?');
//console.log(respuestaConfirm);
//otras operaciones
/* funciones en consola: tambien se puede realizar operaciones*/
console.log(2+2);
console.log('hasta aqui todo bien');
console.log(true);
console.log('ID:'+20);

/* 
Podemos modificar el DOM
mostrar el elemento con la etiqueta h1
document devuelve el global de la pagina(toda la estructura) y se pude seleccionar todo tipo de etiquetas */
etiqueta = document.querySelector('h1');
console.log(etiqueta);

/* Console log devuelve un valor undefined */
var hola='hola mundo';
console.log(hola);
//Podemos mostrar arrays
console.log([1,2,3]);

//podemos mostrar arrays como tablas
console.table([1,2,3]);

//pueden ser de otros tipos
console.error('algo salio mal'); 
console.warn('algo salio mal');

//tambien se puede medir tiempo
console.time('hola');
console.warn('hubo un error');
console.warn('hubo un error');
console.warn('hubo un error');
console.warn('hubo un error');
console.timeEnd('hola');
 