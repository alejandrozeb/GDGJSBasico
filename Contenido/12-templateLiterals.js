const producto = 'Pizza',
      precio = 30,
      producto2 = 'Hamburguesa',
      precio2 = 40;

/* forma vieja de hacer un html */
 
/* let html;
html='<ul>' +    
     '<li> Orden: ' + producto + '</li>' +
     '<li> Precio: ' + precio + '</li>' +
     '<li> Orden: ' + producto2 + '</li>' +
     '<li> Precio: ' + precio2 + '</li>' +
     '<li> Total: ' + (precio + precio2) + '</li>'+
     '<ul>';
     
document.getElementById('app').innerHTML = html; */

//Forma de enviar al dom (para que salga en el navegador) selecciona la etiqueta e inyecta el codigo

/* con templates literals */

html= `
    <ul>
        <li> Orden: ${producto} </li>
        <li> Precio: ${precio} </li>
        <li> Orden: ${producto} </li>
        <li> Precio: ${precio2} </li>
        <li> Total: ${total(precio, precio2)} </li>
    </ul>
`;
document.getElementById('app').innerHTML = html;

function total(precio, precio2){
    return precio + precio2;
}
//Usar template Literals ahorra codigo y lo hace mas comprensible ``
//Para acceder a las variables solo es necesario $() sin necesidad de concatenar con el +

