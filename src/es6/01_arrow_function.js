//Manera clasica de hacer la declaración
function square(numero){
    return numero**2;
}

//Hay que hacerlo asi cuando tenemos más
//de una linea de código en nuestra lógica.
//Ya se hace la asignación en una constante
const square = (numero) => {
    return numero**2;
}

//Podemos eliminar {} cuando tenemos
//solo una linea de código en la lógica
//(el return ya no es necesario)
const square = num => num**2;