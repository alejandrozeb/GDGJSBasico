/* Converir numeros */
const numero1 = "50",
      numero2 = 10,
      numero3 = 'tres';

/* evalua los datos pero tiene errores como el siguiente */

console.log(numero1+numero2); 
//no suma si no concatena
console.log(numero1-numero2); 
//En este caso si realiza la operacion detecta el signo mas para concatenar

/*Convertir cadenas a numeros */

console.log( Number(numero1)+numero2);
//Validando el numero

console.log(parseInt(numero1)-numero2);
/* con parseInt */

console.log(Number(numero3));
/* cuando trata de convertir un valor no numerico devuelve el valor NaN (not a number)*/

let dato;
dato = Number("20");
console.log(dato);

dato= Number('20.10931');
console.log(dato);

dato = Number(true);
console.log(dato);
/* el resultado es 1 por que se asocia con 1 = true y 0 = false */

dato = Number(null);
console.log(dato);

dato = Number(undefined);
console.log(dato);

dato = Number('hola mundo');
console.log(dato);

dato = Number([1,2,3,4,5]);
console.log(dato);


//parseint Integer,parsefloat flotante
dato = parseInt('100');
console.log(dato);

dato = parseFloat('100.65611565');
console.log(dato);

dato = parseFloat('100.2030');
console.log(dato);

dato= parseInt('100.2030');
console.log(dato);

dato = 1010010;
dato = parseInt(dato, 2);
console.log('Soy un Binario: '+dato);

dato = parseInt(010);
console.log('Soy un Octal: '+ dato);

/* tofixed solo aplica numero que ayuda a fijar una cantidad de digitos de un numero */
dato = 18929173.34324234;
console.log(dato.toFixed(3));

dato = '189291173';
console.log(parseInt(dato).toFixed(2));


