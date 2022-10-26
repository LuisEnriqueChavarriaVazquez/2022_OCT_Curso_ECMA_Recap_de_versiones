//Declaramos una cadena
const texto = "Hola";
//Insertamos 6 guiones al inicio y al final.
//El string final medirá 10 caracteres.
console.log(texto.padStart(10, '-'));
console.log(texto.padEnd(10, '-'));

//Puedo crear elementos vacios en el array
const ages = [1,2,3,4,5,6,,,,,7,8];
console.log(ages);
console.log("Longitud = " + ages.length);
