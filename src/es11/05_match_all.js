//Busca la palabra apple en un string
const regex = /\b(Apple)+\b/g;

//Texto en donde buscaremos la coincidencia
const texto = "Apple es una fruta, Banana, Kiwi, sdsd";

for(const match of texto.matchAll(regex)){
    console.log(match);
}
