//Ahora podemos pasar de un array a un objeto
const arrayEntries = [
    ['name', 'Andres'],
    ['email', 'luis@gmail.com'],
    ['age', 23]
];
console.log(arrayEntries);

//Hacemos la conversion a objeto.
/* Antes esto lo teniamos que hacer con JQUERY*/
const objectEntries = Object.fromEntries(arrayEntries);
console.log(objectEntries);