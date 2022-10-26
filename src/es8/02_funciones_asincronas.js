
//Almacenamos el valor retornado de la promesa
const funcAsync = () => {
    //Declaramos la promesa
    return new Promise((resolve, reject) => {
        //Usamos el condicional ternario
        //IF true
        (true)
        //Hace lo siguiente 
        //Ejecutamos el código cada cierto tiempo
        ? setTimeout(() => resolve('Async!!'), 2000)
        //Else hace lo siguiente
        : reject(new Error('Error!'));
    })
}

//Hacemos la funcion asincrona
//Debe llevar async para indicar que es asincrona
const anotherFn = async () => {
    //Podemos usar await porque es asincrona
    //Ejecutamos la promesa
    const something = await funcAsync();
    //Imprimos lo que nos retorne la promesa
    console.log(something);
    console.log("Ya se ejecuto la asincrona!!");
}

console.log("Antes de la ejecucion");
anotherFn();
console.log("Despues de la ejecucion");