//Definimos nuestro objeto literal
const alumnos = {
    alumnoUno: 'Luis',
    alumnoDos: 'Enrique',
    alumnoTres: 'Romina',
}

//Obtiene la llave valor en un array [[],[]]
console.log(Object.entries(alumnos));
//Obtiene los valores en array []
console.log(Object.values(alumnos));
//Obtiene las llaves en un array []
console.log(Object.keys(alumnos));
