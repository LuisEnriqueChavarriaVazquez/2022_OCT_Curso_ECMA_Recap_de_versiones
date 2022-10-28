const button = document.getElementById('btn');

//Hacemos click con una funcion anonima asyncrona
button.addEventListener('click', async function(){
    //Carga module de forma asincrona
    const module = await import('./module.mjs');
    console.log(module);
    //Ejecuta la función hello
    module.hello();
});