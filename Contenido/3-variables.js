//Pueden ser de tipo var, const y let

//--------------var---------------------
var nombre = "Alejandro";
var nombre = "GDG";
//podemos declarar la misma variable varias veces

var nombre;
//declaramos sin ningun valor

var libro;
libro = 'Dhammapada';
//asignamos un valor

var madera = 'Roble', madera2 = 'Pino';
console.log(madera);
console.log(madera2);
//declarando mas de una variable en una solo linea

/* cosas importantes cuando nombramos variables */

//var 10maderas;
//error los numeros al inicio no estan permitidos

var maderas10=10;
console.log(maderas10);
/* pero si una cadena y numero 
crear variables relacionadas al contexto o la naturaleza, los nombres deben ser significativos*/


/* formas de nombrar variables */
var primerNombre ='Alejandro'; //camelcase
var primer_nombre = 'Alejandro'; //underscore
var PrimerNombre='Alejandro'; // pascal case
var primernombre='Alejandro'; // no recomendado

//hoisting

//------------------------let----------------
let nombre1 = "Alejandro";
let producto = "Cerveza";
//declarar una variable tipo let

let nombre2;     
//se puede declarar sin valor

let apellido = "Zeballos", snack = "Chocolates";
//sigue las mismas reglas de var

/* let laptop = "hp";
let lapttop = "lenovo"; */
/* error, no se puede volver a declarar la misma variable.
se recomienda usar let cuando el valor puede cambiar de datos */
let laptop = "hp";
    laptop = "lenovo";

//-----------------------------const---------------
//Una constante es una variable que no cambiara en el tiempo pi

const pi = 3.1415;
//solo se puede declarar de forma asignando un valor

/* const monitor;
monitor = "samsung"; */
/* error este tipo de variable es una constante, se recomienda usar para valores que no cambiaran */

const monitor = "samsung";
console.log(monitor);


/* por consola las respuestasn negras son cadenas y las azules con numeros */

/* concatenar */
let mensaje;
mensaje= 'java'+'script';

let aprediendo = 'apreniendo',
    tecnologia = 'Javascript';

/* console.log(aprediendo+' '+tecnologia); */
console.log(`${aprediendo} ${tecnologia}`);
/* nueva forma */