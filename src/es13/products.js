//fetch es necesario para trabajar con APIS
import fetch from "node-fetch";

//Aqui vamos atrabajar con la fake api de platzi
//await lo que hace es que todo sea asincrono
const response = await fetch('https://api.escuelajs.co/api/v1/products');
const products = await response.json(); //La data la convertimos en JSON

//Exportamos el modulo con el JSON
export {products};