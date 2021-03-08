/* En javascript el tipo de dato se guarda en la variable a este se llama variable dinamica */

let valor;
valor = 'Alejandro';
console.log(typeof valor);
valor = 30; 
console.log(typeof valor);
valor = 80.80;
console.log(typeof valor);
//todos son de tipo number

valor = "20";
console.log(typeof valor);

valor = true;
console.log(typeof valor);

valor = null;
console.log(typeof valor);

valor = undefined;
console.log(typeof valor);

valor = {nombre:"Alejandro"};
console.log(typeof valor);

valor = Symbol('simbolo');
console.log(typeof valor);
 
valor = [1,2,3,4];
console.log(typeof valor);

//fecha de referencia
valor = new Date();
console.log(typeof valor);