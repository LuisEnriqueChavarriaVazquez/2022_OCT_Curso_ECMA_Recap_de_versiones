/*
*   Con flat map podemos aplanar
*   arrays de multiples dimensiones
*   por ejemplo, el array que tenemos
*   tienen más arrays dentro, podemos
*   elegir entonces el número de columnas. 
*/

//////////////////PRIMER EJEMPLO
//Declaramos un array con 3 niveles
const array = [1,2,3,4,5,6,7,8,9,10,["a","b","c",["n","m"]]]
//Aplanamos todo lo que esta solo en el primer nivel
console.log(array.flat(1));
//Aplanamos todo lo que esta hasta el segundo nivel
console.log(array.flat(2));

//////////////////SEGUNDO EJEMPLO
//Declaramos un array con 3 niveles
const array2 = [1,2,3,4,5,6,7,8,9,10,["a","b","c",["n","m"], ["x","y"]]]
//Aplanamos todo lo que esta solo en el primer nivel
console.log(array2.flat(1));
//Aplanamos todo lo que esta hasta el segundo nivel
console.log(array2.flat(2));

//////////////////TERCER EJEMPLO
//Declaramos un array con 4 niveles
const array3 = [1,2,3,4,5,6,7,8,9,10,["a","b","c",["n","m"], ["x",["w","ww"]]]]
//Aplanamos todo lo que esta solo en el primer nivel
console.log(array3.flat(1));
//Aplanamos todo lo que esta hasta el segundo nivel
console.log(array3.flat(2));
//Aplanamos todo lo que esta hasta el tercer nivel
console.log(array3.flat(3));


///////////////////////////
////USO DE flatmap
/*
*   Estamos aplanando los array, pero dentro estamos
*   incluyendo una funcion flecha con una lógica interna 
*/
const arrayFlat = [1,2,3,4,5,6,7,8,9];
console.log(arrayFlat.flatMap(value => [value, value*2]));