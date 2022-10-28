//Realiza una acción en caso de un error
try{
    hello();
}catch(error){
    console.log(error);
}

//Cae en un catch cuando la función no esta definida.

//Lo que se agreó tambien es lo siguiente...
/*EL CATCH con el error es opcional */
try{
    anotherFunction();
}catch{
    console.log("Mensaje de error u otra funcion");
}