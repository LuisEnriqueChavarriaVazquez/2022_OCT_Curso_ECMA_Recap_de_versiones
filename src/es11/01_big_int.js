//En números grandes hay que poner una n al final
/*
*   Indica al navegador que es un número enorme 
*/
const bigNumber = 392392392394394394394394334n;

//Otra forma es con BigInt
const bigNumber2 = BigInt(392392392394394394394394334);
console.log('Primer número = ' + bigNumber);
console.log('Segundo número = ' + bigNumber2);