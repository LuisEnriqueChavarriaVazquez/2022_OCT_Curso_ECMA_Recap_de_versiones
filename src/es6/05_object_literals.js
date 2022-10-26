//Object literals
/*
*   Podemos retornar objetos literales
*   y dentro del retorno de los objetos
*   asignar valores a los atributos
*   con los parametros de la función 
*/

//Declaramos la función
function newUser(user, age, country, uID){
    //Retornamos un objeto literal
    return{
        user, 
        age,
        country,
        id: uID //Hacemos asignaciones en el return
    }
}

//Pasamos valores e imprimimos el retorno
console.log(newUser('Luis', 22, 'MX', '920203'));