/*  Operadores 
== igual
>  mayor
< menor
>= mayor igual que
<= menor igual que

&& 
and Las dos condiciones deben ser verdaderas

|| 
or Solo una debe ser verdadera

!=
diferentes o no iguales
*/

console.log(20 == 50);
console.log(20 < 50);
console.log(20 > 50);

console.log(true && true);
console.log(true && false);
//valor de &&

console.log(true || true);
console.log(true || false);
console.log(false || false);
//valor de ||

console.log( 2 != 3 );
/* diferentes */

//-----------------casos especiales--------------------

console.log(20 == '20');
//== compara el valor
console.log(20 === '20');
//=== compara el valor y el tipo de dato

console.log(20 != '20');
//!= verifica el valor
console.log(20 !== '20');
//=== compara el valor y el tipo de dato

/* JS convierte el valor a number por que necesita ser comparado */

console.log(null == undefined);
console.log(null === undefined);
//en este caso da true pero si se usa estricto es false

/* es recomendable usar === para evitar bugs */


let nombre = 'Alejandro';
let apellido = 'Zeballos';
console.log(nombre < apellido);
//deberia salir un error al comparar dos valores de tipo string

/* Para cadenas toma en cuenta el espacio, 
ademas comparando letras se guia por el siguiente rango expresado de menor a mayor: ABCD....Zabcd....xyz* siendo z el que tiene mayor rango */