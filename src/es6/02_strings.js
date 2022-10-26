/////////////////
////////ANTES
let hello = 'Hola';
let world= 'Mundo';
let textoConcatenado = hello + " " + world + "!";
console.log(textoConcatenado);

/////////////////
////////DESPUES
//Debemos usar ALT+96 para insertar backsticks
let textoConcatenado2 = `${hello} ${world}!`;
console.log(textoConcatenado2);

//////////////////////
////USO DE MULTILINEA
let lorem = 'Esto es un string \n' + 'Esta es otra linea';
let lorem2 = `Esto es un string
Esta es la segunda linea`;
console.log(lorem);
console.log(lorem2);