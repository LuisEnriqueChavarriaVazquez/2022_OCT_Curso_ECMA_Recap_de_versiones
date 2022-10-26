///////////////
///////PARTE 1
/*
*   Se crea la variable y luego
*   se reasigna.
*/

//Puede ser redeclarado y reasignado
var lastName = 'David';
lastName = 'Oscar';
console.log(lastName);

//Puede ser reasignado pero no redeclarado
let fruit = 'Apple';
fruit = 'Mango';
console.log(fruit);

//No se puede (es una constante)
const animal = 'Perro';
animal = 'Gato';
console.log(animal);

///////////////
///////PARTE 2

//Lo de adentro puede acceder a lo de fuere
//Lo de afuera no debería poder acceder a lo adentro
const fruits = () => {
    //Creamos un bloque de código
    if(true){
        var fruit = 'Apple'; //Var siempre es global scope
        let fruit2 = 'Mango'; //block scope
        const fruit3 = 'Banana'; //block scope
    }
    //Var puede ser accedido aunque este dentro de un bloque
    console.log('fruit', fruit); 
    //LET Y CONST no son globales por estar dentro del bloque
    console.log('fruit2', fruit2);
    console.log('fruit3', fruit3);
}

fruits();
