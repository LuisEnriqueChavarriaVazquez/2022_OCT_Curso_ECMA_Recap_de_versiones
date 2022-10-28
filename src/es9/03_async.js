//Creamos un generator asincrono
/*
*   Los generator son bucles que regresan
*   los elementos en el orden en que estos se quedaron 
*/
/*
*   Lo que estamos regresando son promesas con
*   valores concretos.
*/
/*
*   Cabe destacar que todo esto es asincrono
*/
async function* anotherGenerator(){
    yield await Promise.resolve(1);
    yield await Promise.resolve(2);
    yield await Promise.resolve(3);
}

//Guardamos el generator en la constante
const other = anotherGenerator();

//PASO 1 Iteramos el generator con .next
//PASO 2 Obtenemos el response de la promesa
//Paso 3 Dentro del response de la promesa pasamos el valor del generator
other.next().then(response => console.log(response.value));
other.next().then(response => console.log(response.value));
other.next().then(response => console.log(response.value));
console.log("Hola"); //Paso 4 se imprime un mensaje

//Ahora lo que hacemos es la declaracion de una funcion asincrona
async function arrayOfNames(array){
    //El for se ejecuta con await (se espera)
    for await (let value of array){
        //Imprime un mensaje en la consola
        console.log(value);
    }
}

//Hace el llamado de la funcion y le pasa el array
const names = arrayOfNames(['Oscar', 'Luis', 'Maria']);
//Imprime el mesnaje
console.log('After');