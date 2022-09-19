/*
Esto es un comentario multilinea en JS
..
*/
// comentario de una linea

let variable1;
let variable2;
let resultado;

//asignar valores a las variables
variable1 = 10;
variable2 = 20;
//operacion matematica
resultado = variable1 + variable2
//muestro por consola
console.log(resultado);
//alert resultado
alert(resultado);
//string
let nombre = 'carlos';//string
let apellido = 'lopez';//string
let edad = 36;//number
let letra = 'a'
let esArgentino = true; //boolean > true | false
//tipo objeto
let persona = {
    nombre: 'carlos',
    apellido: 'lopez',
    edad: 36,
    letra: 'a',
    esArgentino: true
};
console.log('edad',edad)
edad = 37;//es posible porque edad es variable

console.log('variable apellido:', apellido); //linea29
console.log(persona);

//mostrar algun atributo del objeto persona
console.log(persona.esArgentino, persona.apellido, persona.edad);

//dejar fijo un valor
const altura = 175;
console.log('altura',altura);

//cambio el valor de persona
persona = {
    nuevoAtributo:150,
    tieneAuto: true
};

//creo un nuevo objeto constante
const Auto = {
    chasis: 1234567,
    anio: 2022,
    color: 'rojo',
    esNacional: true
};

//puedo cambiar los valores de los atributos de los objetos
Auto.color = 'amarillo';
console.log(Auto); 

console.log(persona);