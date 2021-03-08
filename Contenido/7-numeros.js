/* numeros en javascript */

const numero1 = 50;
const numero2 = 10;
const numero3 = 90.20;
const numero4 = .4020;
const numero5 = -8;
//Forma de instanciar numeros en js


let resultado;

resultado = numero1 + numero2;
console.log(resultado);
//suma

resultado = numero1 - numero2;
console.log(resultado);
//resta

resultado = numero1 * 2;
console.log(resultado);
//multiplicar

resultado = numero1 / numero2;
console.log(resultado);
//divisiones

resultado = numero1 % numero2;
console.log(resultado);
//modulo

resultado=Math.PI;
console.log(resultado);
/* pi */

resultado=Math.round(2.4);
console.log(resultado);
//redondea, sigue la reglas de redondeo

resultado = Math.ceil(2.4);
console.log(resultado);
//redondea al mayor

resultado = Math.floor(2.9);
console.log(resultado);
//redondea al menor

resultado = Math.sqrt(144);
console.log(resultado);
/* raiz cuadrada*/

resultado = Math.abs(numero5);
console.log(resultado);
// valor absoluto

resultado = Math.pow(8,3);
console.log(resultado);
//potencia

resultado = Math.min(3,6,7,5,8,9,);
console.log(resultado);
//minino


resultado = Math.max(3,6,5,7,8,9);
console.log(resultado);
//maximo

resultado = Math.random();
console.log(resultado);
//aleatorio entre 0 y 1

resultado = Math.floor(Math.random() * 10);
console.log(resultado);
//aleatorio entre 0 y 9

resultado = Math.floor(Math.random() * 11);
console.log(resultado);
//aleatorio entre 0 y 10

resultado = Math.floor(Math.random() * 10) + 1;
console.log(resultado);
//aleatorio entre 1 y 10

resultado = 30/6 * 2;
console.log(resultado);
/* Orden de operaciones es igual a las reglas de jerarquia de operadores*/
resultado = (10 + 20 + 20 + 10 + 40) * .20;
console.log(resultado);

puntaje = 10;
puntaje++;
puntaje;
//primero imprime luego asigna

puntaje = 10;
++puntaje;
//primero asigna luego imprime
 
puntaje = 20;
puntaje +=3
//asigna un rango determinado por nosotros
