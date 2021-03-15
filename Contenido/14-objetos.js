/* crear un objeto */

const persona = {
    nombre: 'Miguel',
    apellido: 'Martinez',
    profesion: 'Diseñador Gráfico',
    email: 'correo@correo.com',
    edad: 20,
    musica: ['trance','rock','grunge'],
    hogar: {
        ciudad: 'La Paz',
        pais: 'Bolivia'
    },
    // tambien se puede agregar funciones 
    nacimiento: function(){
        return new Date().getFullYear()-this.edad;
    }
    // para acceder a las propiedades del mismo objeto se coloca this 
}
//Los Objetos en javascript: los atributos van sin comillas y los datos en comillas separados por  :


persona.musica.push('pop');
console.log(persona);
console.log(persona.hogar.ciudad)
// otra forma de acceder no se recomienda por que no es muy usada 

console.log(persona['hogar']['pais']);
//Mostrando elementos

console.log(persona.nacimiento());
// Mostrando la funcion 
 
const persona2 = {
    nombre:'Miguel',
    apellido: 'Martinez',
    profesion: 'Diseñador Gráfico',
    email: 'correo@correo.com',
    edad:30,
    musica: ['trance','rock','grunge'],
    hogar: {
        ciudad: 'La Paz',
        pais: 'Bolivia'
    }, 
    nacimiento: function(){
        return new Date().getFullYear()-this.edad;
    }
}
// edad distinta
console.log(persona2.nacimiento());

const autos=[
    {modelo: 'mustang', motor:6.0},
    {modelo: 'Camaro', motor:6.2},
    {modelo: 'Challenger', motor:6.3},
    ];
// arrays de objetos

console.log(autos[0].modelo);
// Forma de mostrar un atributo de un objeto, que esta en el array 

for(let i=0;i<autos.length; i++ ){
    console.log(autos[i]);
    // con literal 
    console.log(`${autos[i].modelo} ${autos[i].motor}`);
}
// Imprimir el array
