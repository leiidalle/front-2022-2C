const descuentoEstudiante = 0.8;
const descuentoTrainee = 0.5;
const descuentoJunior = 0.15;


/*const Estudiante = document.getElementById('Estudiante').value;
const Trainee = document.getElementById('Trainee').value;
const Junior = document.getElementById('Junior').value;*/

function obtenerTipoConsumidor(Categoria) {
    if (Categoria === 'Estudiante') {
        tipoDescuento = descuentoEstudiante
    } else if (Categoria === 'Trainee') {
        tipoDescuento = descuentoTrainee;
      } else if (Categoria === 'Junior') {
        tipoDescuento = descuentoJunior;
      }
      else {
        tipoDescuento = '';
      }
    return tipoDescuento
};

function calcularPrecio(tipoDescuento, cantidadEntradas, valorEntrada) {
    const precioFinal = ((cantidadEntradas * valorEntrada) - (tipoDescuento * (valorEntrada * cantidadEntradas)))
    return precioFinal
};

function obtenerResumen() {
    const cantidadEntradas = document.getElementById('Cantidad').value;
    const categoria = document.getElementById('Categoria').value;
    const valorEntrada = 200;
    const tipoDescuento = obtenerTipoConsumidor(categoria);
    const precioFinal = calcularPrecio(tipoDescuento, cantidadEntradas, valorEntrada);
    return precioFinal
}

/*function limpiarFormulario() {
    document.getElementById("form1").reset();
    document.getElementById("form2").reset();
  }*/

  console.log(obtenerResumen);


  function textResumen() {
    var inputF = document.getElementById("text1");
    inputF.value = obtenerResumen(); }

    document.getElementById('Resumen').addEventListener("click", textResumen())
