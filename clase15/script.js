let edad = 0

edad = edad + 1;

let otraEdad = edad++;
let edad2 = ++edad;

let altura = 175;
altura--;
--altura;

/*diferencia entre == y ===*/
/*let a = '10'
let b = 10
console.log(a == b) //valor: true | false , en este caso daría true porque ambos dicen 10
console.log(a === b) //compara tipos de valor, en este caso daría false porque uno es string y el otro no
*/

// % da el resto, / da una división común

function incrementar() {
//obtengo la etiqueta por ID utilizando el objeto documento
//y la funcion getelementbyid('id)
//js >
//SIEMPRE VER QUE TIPO DE VALOR TENGO, SI ES STRING PASARLO A NÚMERO PARA EJECUTAR LAS OPERACIONES MATEMÁTICAS
//parseInt para número entero, para decimal es otro parse
    const labelContador = document.getElementById('contador');
    let valorDelLabelContador = labelContador.innerHTML;
    console.log(labelContador);
    console.log(valorDelLabelContador);
    valorDelLabelContador = parseInt(valorDelLabelContador);
    //console.log(typeof valorDelLabelContador); >>PARA VER QUE TIPO DE VALOR ES
    valorDelLabelContador++;
    labelContador.innerHTML = valorDelLabelContador;
    // % >>>>DEVUELVE EL VALOR DE RESTO CERO (SI ES PAR)
    // SI R=0 >> es par, de lo contrario es impar
    //bifurcación:if
    ImprimePar(valorDelLabelContador);
}

function decrementar() {
    const labelContador = document.getElementById('contador');
    let valorDelLabelContador = labelContador.innerHTML;
    console.log(labelContador);
    console.log(valorDelLabelContador);
    valorDelLabelContador = parseInt(valorDelLabelContador);
    valorDelLabelContador--;
    labelContador.innerHTML = valorDelLabelContador;
    ImprimePar(valorDelLabelContador);
}

function esPar(valor) {
    if ((valor % 2) === 0) {
        return true;
    } else {
        return false;
    }
}
//podríamos poner return valor % 2 === 0;

function ImprimePar(valor) {
    let textoParidad; 
    if(esPar(valor)) {
        textoParidad = 'ES PAR'
    } else {
        textoParidad = 'ES IMPAR'
    }
    actualizarTexto('paridad', textoParidad);
}

function actualizarTexto(id, nuevoValor) {
    const labelParidad = document.getElementById('paridad')
    labelParidad.innerHTML = textoParidad;
}


