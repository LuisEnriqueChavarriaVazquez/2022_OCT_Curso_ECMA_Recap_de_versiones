//Declaramos 3 promesas
const promise1 = new Promise((resolve,reject) => {
    reject("Rejected!!!!");
});

const promise2 = new Promise((resolve, reject) => {
    resolve("Resolved!!!!");
});

const promise3 = new Promise((resolve, reject) =>{
    resolve("Resolved 2!!!!!");
});

//Ejecutamos todas las promesas
/*
*   Las promesas se pasan en un array
*   y nos retorna un array con los
*   resultados de las promesas en varios
*   objetos.
*/
Promise.allSettled([promise1,promise2,promise3])
.then(response => console.log(response));