/* convertir de numero a string */
let numero;

numero = 90210;

numero = String(numero);
console.log(numero);
console.log(typeof numero);
//primera forma de conversion


let dato;
dato = '4'+'4';
console.log(dato);
console.log(typeof dato);
//intentar sumar Strings

console.log(dato.length);
//los cuenta como strings
//boolean
console.log("-----------");
dato = String(true);
console.log(dato);
console.log(typeof dato);

/* arreglos */
console.log("-----------");
dato = String([1,2,3]); //los convierte a todos a un string de 5
console.log(dato);
console.log(dato.length);
console.log(typeof dato);

//tostring
console.log("-----------");
dato = 20;
dato = dato.toString();
console.log(dato);
console.log(dato.length);
console.log(typeof dato);
/* convierte booleanos y arreglos pero no undefined y null por que no estan definidos */