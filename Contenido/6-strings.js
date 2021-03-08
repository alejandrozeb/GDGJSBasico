/* Strings:  conjunto ordenado de letras (caracteres, cadenas, textos) */
let nombre, mensaje;
nombre = "Alejandro";

mensaje = 'Java' + 'Script';
//concatenar

let aprendiendo = 'Aprendiendo',
    tecnologia = 'JavaScript';
console.log(aprendiendo + " " + tecnologia);
//uniendo variables en una sola

//-----------------FUNCIONES--------------------------
console.log(tecnologia.length);
//Length cuenta el numero de  palabras de la cadena

console.log(tecnologia.concat(' ', 'es la luz'));
//Para concatenar, dos o mas elementos

console.log(tecnologia.toUpperCase());
//Convierte a mayusculas

console.log(tecnologia.toLocaleLowerCase());
//Convierte a minisculas

mensaje = 'Aprendiendo javascript con el GDG';
console.log(mensaje.indexOf('javascript'));
//Para buscar un texto en una cadena si no la encuentra devuelve -1

console.log(mensaje.substring(0,11));
//Busca la posicion y la corta la porcion

console.log(mensaje.slice(-11));
//Busca con numeros negativos la posicion y corta desde el final

console.log(mensaje.split(' '));
//Divide la cadena en un array dependiendo del atributo o argumento 

console.log(mensaje.replace('GDG','GDG-La Paz'));
//Reemplaza la cadena por otra

console.log(mensaje.includes('GDG'));
//Devuelve un valor booleano(True/False) al encontrar la palabra

console.log(tecnologia.repeat(10));
//Repite la cadena

console.log(tecnologia.charAt(5));
//devuleve un caracter de la cadena en la pocision especificada