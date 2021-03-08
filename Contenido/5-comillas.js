/* Formas de mostrar un mensaje con variables  */

//comillas dobles mensajes
console.log("Gdg es la luz");

//comillas simples mensajes
console.log('Simples');

//concatenar
//comillas dobles + variable
personaje = 'Don quijote';
console.log("Hola soy:" + personaje);

//comillas simples + variable
console.log('Hola yo no soy: ' + personaje);

//comillas dobles o mas variables
personajeSecundario = "Sancho panza";
console.log("Hola nosotros somos:" + personaje + personajeSecundario);

//comillas simples o mas variables
console.log('Hola nosotros no somos: ' + personaje + personajeSecundario);

//comillas dobles mas variables mas texto separado
console.log("Hola nosotros somos: " + personaje + " y " + personajeSecundario);

//comillas simples mas variables mas texto separado
console.log('Hola nosotros somos: ' + personaje + ' y ' + personajeSecundario);

//no existe ninguna diferencia en usar los dos a menos que queramos escapar
//dobles
console.log("Hola yo soy \'Don Quijote\' de la mancha");
//simples
console.log('Hola yo soy \"Don Quijote\" de la mancha');

//tenemos un error
//console.log("Hola yo soy \'Don Quijote\" de la mancha');