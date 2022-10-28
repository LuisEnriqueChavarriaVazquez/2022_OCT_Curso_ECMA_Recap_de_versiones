//Creamos el prototipo del usuario
const user = class{
    constructor({
        name,
        age
    }){
        this.name = name,
        this.age = age
    }

    //metodos
    //Los que tienen # son métodos privados
    /*
    *   Solo pueden ser accedidos dentro de la clase. 
    */
    #speak(){
        return "Hola";
    }

    greeting(){
        return `${this.speak()} ${this.name}`;
    }

    //Getters y setters
    get #uAge(){
        return this.age
    }

    set #uAge(n){
        this.age = n
    }
}

//Creamos instancia del prototipo
const luis = new user({
    name: 'Luis',
    age: 22
});

//Getter de la edad
console.log(luis.uAge);
//Setter de la edad
console.log(luis.uAge = 90);