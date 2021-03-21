/* funciones */
/* Sirven para solucionar problemas en pequeñas partes de codigo ademas que son reutilizables */

//Declaracion de una funcion
function saludo(){
    console.log('Hola Alejandro');
}
/* forma de llamar o invocar a una funcion */
saludo();

/* pasando parametros */
function saludoParametro(nombre){
    console.log(`hola ${nombre}`);
}
saludoParametro('Alma');
saludoParametro('Pablo');
saludoParametro('Carolina');

/* Más de un parametro */

function sumar (numero1, numero2){
    console.log(numero1 + numero2);
}
sumar(1, 2);
sumar(3, 4);

/* funciones que retornan un valor */

function sumarDosNumeros(a, b){
    return a+b;
}

let suma;
suma=sumarDosNumeros(1, 2);
suma=sumarDosNumeros(3, 4);
suma=sumarDosNumeros(1, 6);

console.log(suma);

//cuando no damos argumetno devuelve undefined en strings y en numeros nan

function saludar(nombre='visitante'){
    return `hola ${nombre}`;
}
saludo = saludar();
console.log(saludo);
//Podemos definir valores  por defecto

const sumarDosNumerosExpression = function(a=3,b=4){
    return a+b;
} 
console.log(sumarDosNumerosExpression(1, 2));
console.log(sumarDosNumerosExpression(5));
//Function expression podemos guardar nuestra funcion en una variable

//funciones IIFE
  
(function(tecnologia){
    console.log(`creando un IIFE en ${tecnologia}`);
})('javascript');
//se llaman solas


const musica={
    reproducir: function(id){
        console.log(`reproduciendo cancion id ${id}`);
    },
    pausar:function(){
        console.log(`Pause a la musica`);
    }

}
//se pueden añadir a algun elemento de una clase

musica.borrar=function(id){
    console.log(`Borrando la cancion con id: ${id}`);
}
//los metodos tambien se pueden agregar afuera del objeto

musica.reproducir(30);
musica.pausar();
musica.borrar(2);


hola = ()=>{
    console.log('Hola desde flecha');
 }
//funciones flecha

hola();