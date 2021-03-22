// window devuelve todos los valores de la pantalla en innerwidth y height te devuelve el ancho y largo del navegador, faceebok usan estos valores para publicidad

// consolo.log(); funciona en el navegador

//alert() //tambien forma parte del window object

//Prompt
/* const nombre = prompt();
console.log(`Bienvenido ${nombre}`); */
// desplaza una ventana emergente

// confirm
/* if (confirm("Eliminar?")) {
  console.log("Eliminar ");
} else {
  console.log("nada paso");
} */

let altura, anchura;

altura = window.outerHeight;
anchura = window.outerWidth;
console.log(altura);
console.log(anchura);
// todo el navegaador

//Muestra las caracteristicas
let ubicacion;
ubicacion = window.location;
console.log(location);

//redirecciona a otra pagina
//window.location.href='http://twitter.com';

// navigator
ubicacion = window.navigator;
console.log(ubicacion);
/* diferentes propiedades */
ubicacion = window.navigator.appVersion;
console.log(ubicacion);

ubicacion = window.navigator.language;
console.log(ubicacion);

/* informacion relevante de los objetos */
