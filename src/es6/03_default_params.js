////////ANTES
//Asi se asignaba un valor por defecto a los atributos
function newUser(name, age, country){
    var name = name || 'Oscar';
    var age = age || 20;
    var country = country || 'MX';
    console.log({
        name,
        age,
        country
    })
}

newUser();
newUser('Luis', 15, 'CO');

/////DESPUES
//Ahora asi se asignan los valores por defecto
function newAdmin(name = 'Oscar', age = 32, country = 'CL'){
    console.log({
        name,
        age,
        country
    });
}

newAdmin();
newAdmin('LuisAdmin', 20, 'PE');