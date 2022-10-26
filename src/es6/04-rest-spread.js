//Array destructuring
//Cada valor queda una variable
let fruit = ['Apple', 'Banana'];
let [datoA,b] = fruit;

//Ambos son equivalentes
console.log(fruit[0], fruit[1]);
console.log(datoA, b); //Puede ser cualquier nombre

//Object destructuring
//Cda valor queda en la variable
let user = {
    username: 'Oscar',
    age: 34
}
let {username, age} = user;

console.log(user.username, user.age);
console.log(username, age); //Deben ser el nombre de atributos

//Spread operator
//Declaramos un objeto
let person = {
    name: 'Luis',
    age: 28
}

//Declaramos una variable
let country = 'MX';

/*
*   Con el operador se desmenuza el objeto
*   person y se junta con la data de country
*/
let data = {...person, country};
console.log(data);

//Creamos un nuevo objeto
let socialMedia = {
    insta: 'instagramLuis',
    email: 'emailLuis'
}

//Volvemos a usar spread pero ahora con dos
let data2 = {
    ...person,
    ...socialMedia,
    country
}
console.log(data2);

//REST PARAMETER
function sum(num, ...values){
    console.log(values);
    console.log(num + values[0]);
    return num + values[0];
}

sum(1, 1, 2, 3, 4, 5);
