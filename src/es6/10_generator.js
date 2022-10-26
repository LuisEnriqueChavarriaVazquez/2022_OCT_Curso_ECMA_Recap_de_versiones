//El asterisco indica que es un iterador
function* iterate(array){
    //Por cada elemento del array hace algo
    for(let valor of array){
        //Retorna los valores del iterador
        yield valor;
    }
}

//Ejecutamos el iterador
let arrayGente = ['Luis', 'Ana', 'Lana', 'Culiada'];
const valorRetornado = iterate(arrayGente);
//Imprimimos el valor (Cada uno de ellos)
/*
*   Lo especial es que el iterador
*   recuerda en que se quedó
*   recuerda su estado.
*/

//Primera manera de hacerlo (no es dinámico);
// console.log(valorRetornado.next().value);
// console.log(valorRetornado.next().value);
// console.log(valorRetornado.next().value);
// console.log(valorRetornado.next().value);

//Segunda forma de hacerlo (dinamicamente)
for(let i = 0; i < arrayGente.length; i++){
    //Lo imprime n veces sin pasarse
    console.log(valorRetornado.next().value);
}