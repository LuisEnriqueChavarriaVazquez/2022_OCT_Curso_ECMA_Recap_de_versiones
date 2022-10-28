//Declaramos nuestra regla
const regex = /(\d{4})-(\d{2})-(\d{2})/;
//Validamos la fecha con la regla.
const match = regex.exec('2022-02-03');
//Podemos imprimir nuestro string en una tabla.
console.table(match);