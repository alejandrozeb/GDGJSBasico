/* manejando errores en js */

/* funcion que existe */
try{
    algo();
}catch(error){
    //obtiene el error y lo muestra
    console.log(error);
}finally{
    //sin error o con error se ejecutara siempre
    console.log('no le importa, ejecuta el codigo');
}