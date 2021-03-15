  /* Arreglos JS Arrays*/

//numeros enteros
const numeros = [10,20,30,40,50];
console.log(numeros);

const meses = new Array('enero','febrero','marzo','abril');
console.log(meses);
//Arreglo de strings de otra forma

const mezclado = ['hola',20,true,null,false,undefined];
console.log(mezclado);
//Tambien puede almacenar todo tipo de dato

console.log(mezclado.length);
//Para ver el tamaño de un array

console.log(Array.isArray(meses));
//Para ver verificar si es un array

let nombre = 'Juan';
console.log(Array.isArray(nombre));
//No es un array

console.log(meses[1]);
//Para imprimir un dato especifico del array

meses[4]='mayo';
console.log(meses);
//Para ingresar un nuevo elemento al array

/* -----------------funciones de arrays-----------*/


meses.push('Junio');
console.log(meses);
//push agrega un elemento al final

console.log(meses.indexOf('abril'));
//Encuentra un elemento en el arreglo te devuelve la posicion en el que se encuentra

meses.unshift('Mes 0');
console.log(meses);
//Para agregar al incio, recorre los demas elementos

meses.pop();
console.log(meses);
//Elimina el ultimo elemento de un arreglo

meses.shift();
console.log(meses);
//elimina el primer elemento

meses.splice(2,1);
console.log(meses);
//Quita un rango, el primer argumento indica el indice desde donde se eliminaran, el segundo indica la cantidad de datos que se borraran

meses.reverse();
console.log(meses);
//Revertir el array


let arreglo1=[1,2,3],
    arreglo2=[9,8,7];
    console.log(arreglo1.concat(arreglo2));
//para unir arreglos

const frutas = ['Platano','Manzana','Fresa','Naranja','Zanahoria'];
frutas.sort();
console.log(frutas);
//Ordenar un arreglo, en string ordena de a to z

arreglo1=[3,4,6,7,8,9,11,38,67,89,21,34,57,1,2];
arreglo1.sort(); //sale en orden extraño
console.log(arreglo1);
//Ordenar con sort numeros

arreglo1=[3,4,6,7,8,9,11,38,67,89,21,34,57,1,2];
arreglo1.sort(function(x,y){
                return x-y;
            });
console.log(arreglo1);
//Para ordenar numeros

arreglo1=[3,4,6,7,8,9,11,38,67,89,21,34,57,1,2];
arreglo1.sort(function(x,y){
                return y-x;
            });
console.log(arreglo1);
//Para la inversa