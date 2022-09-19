function calcular(){
    let valor1 = prompt('Ingrese el Valor 1:');
    let valor2 = prompt('Ingrese el Valor 2:');
    let operacion = prompt('Ingrese el Operador (+,-,*,/')

    console.log(valor1);
    console.log(valor2);
    console.log(operacion);
    const resultado = parseInt(valor1) + parseInt(valor2);
    console.log(resultado);

}