//defino el primer vector|array
const edadCarlo = 36;
const edadEduardo = 28;
const edadCesar = 25;

//los vectores son dinámicos
const edades = [];
//agregar un elemento
edades.push(36); //agregando 36 al vector edades
//invicando al metodo "push"
edades.push(edadEduardo); //hasta aca el tamaño del vector es 2 y las posiciones son 0 y 1
edades[2] = edadCesar;
console.log(edades);
//agrego mas edades
edades.push(38);
edades.push(39);
edades.push(51);

//recorrer el vector con uso de ciclos, primero el punto de inicio, segundo la posición de corte y tercero de a cuanto recorre o avanza
for(let i=0;i < edades.length; i++) {
    //alt+96
    console.log(`dentro del for ${i}:`, edades[i]);
}

//ejercicio notas alumno

function calcular() {
    const nota1Value = document.getElementById('Nota1').value;
    const nota2Value = document.getElementById('Nota2').value;
    if(!nota1Value !== '' && nota2Value !== ''){
     //invoco la funcion que procesa las notas
    procesarNotas(+nota1Value, +nota2Value);
    }else {
        alert('complete las dos notas');
    }; //solo va a pocesar si el usuario cargó los datos

}

function procesarNotas(Nota1,Nota2) {
    const notas = [Nota1,Nota2];
    let min = calcularMinimo(notas);
    let promedio = calcularPromedio(notas);
    let max = calcularMaximo(notas);
    //muestro por consola los datos
    console.log('minimo: ', min);
    console.log('máximo: ', max);
    console.log('promedio: ', promedio);
}

function calcularMaximo(notas) {
    let max;
    if(notas[0] > notas[1]) {
        max = notas[0]
    }
    if(notas[1] > notas[0]) {
        max = notas[1]
    }
    if(notas[0] === notas[1]) {
        max = notas[0]
    }
    return max;
}

function calcularMinimo(notas) {
    let min;
    if(notas[0] < notas[1]) {
        min = notas[0]
    }
    if(notas[1] < notas[0]) {
        min = notas[1]
    }
    if(notas[0] === notas[1]) {
        min = notas[0]
    }
    return min;
}

function calcularPromedio(notas) {
    //recorro el vector acumulando las notas
    let acumulador = 0;
    for (let i = 0; i < notas.length; i++) {
        acumulador = acumulador + notas[i];
    }
    //calculo el promedio: sumatoria de notas dividido por la cantidad de notas
    const promedio = acumulador / notas.length;
    return promedio;
}
