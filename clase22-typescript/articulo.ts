//tipo fuerte
let edad:number = 10;
//edad = 'hola soy carlitos'


function saludar(saludo:string) : void {
    console.log(saludo);
}

function sumar(a:number, b:number): number {
    return a + b;
}

//tipo de datos
const anio:number = 10;
const nombre:string = 'carlos';
const alto:boolean = false;
const fechaNac:Date = new Date();

//interfaces 
interface articulo {
    nombre:string;
    edad:number
}

const articulo: articulo = {
    nombre: '',
    edad:55
}

//programacion orientada a objetos: P.O.O | O.O.P
//clases
//objetos
//interfaces
//clases abstractas
interface IHablar {
    hablar(): void;
}

class Persona {
    //atributos
    sexo:string;
    nombre:string;
    fechaNac:Date;

    //constructor
    constructor(sexo:string,nombre:string) {
        //this es la referencia dentro de la clase que permite ver los atributos y metodos
        this.fechaNac = new Date();
        this.nombre = nombre;
        this.sexo = sexo;
    }

    //metodos
    mostrarDatos() : void {
        console.log(yo.fechaNac);
        console.log(yo.nombre);
        console.log(yo.sexo);   
    }

    hablar(): void {
        //logica de como habla una persona
    }
}

/*class Animal implements IHablar {
    //atributos
    sexo:string;
    nombre:string;
    fechaNac:Date;
}*/

//puedo instanciar objetos de la clase persona
const yo = new Persona('masculino', 'carlos');
const vos = new Persona('femenino', 'leila');
yo.mostrarDatos();
vos.mostrarDatos();