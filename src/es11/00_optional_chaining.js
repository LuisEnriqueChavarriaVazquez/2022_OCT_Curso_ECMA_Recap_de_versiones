//Ayuda a la validación de los valores de los objetos
/*
*   Saber si se encuentran o no. 
*/

//Creamos nuestro objeto
const users = {
    luis: {
        country: 'MX'
    },
    ana:{
        country: 'CO'
    }
}

//Accedemos a los países.
console.log(users.luis.country, users.ana.country);

//Si accedemos a un valor que no existe (por x o y motivo)
//En caso de que no exista, no regresa un error, solo regresa undefined
console.log(users?.ramon?.country); //Retorna undefined
