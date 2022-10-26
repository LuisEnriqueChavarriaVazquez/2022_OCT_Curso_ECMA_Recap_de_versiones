//USO DE LAS PROMESAS
/*
* Evalua algo que va a pasar hoy, mañana o nunca
*/

//Declaramos una funcion flecha
const anotherFunction = () => {
    //Retornamos una promesa
    //Debe tener un resolve y un reject
    return new Promise((resolve, reject) => {
        if(false){ //Si la promesa se cumple
            //Retorna texto
            resolve('Lo logramos'); 
        }else{ //Si no se cumple la promesa
            //Retorna texto
            reject('Fallamos');
        }
    })
}

//Llamamos a la funcion
//NOTA: Puede haber cuanto .then queramos
anotherFunction()
    //Si se cumple hacemo esto...
    /*
    *   resolve nos retorna un texto
    *   que es almacenado en response
    */
    .then(response => console.log(response))
    //Si no se cumple hacemos esto...
    /*
    *   reject nos retorna un texto
    *   que es almacenado en err
    */
    .catch(err => console.log(err));
