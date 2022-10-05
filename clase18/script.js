//funcionflecha //arrow function
//REACT 
/*const addPalabra = () => {

}
*/
const arrayDePalabras = [];

function addPalabra () {
    const valuePalabra = document.getElementById ('palabra').value;
    console.log(valuePalabra);

//que no sea vacío

if(valuePalabra === ''){
   alert('Debe completar la palabra');
    return;
}
//agrego la palabra al array
arrayDePalabras.push(valuePalabra);
console.log(arrayDePalabras);
listarPalabras();
}
function listarPalabras() {
    //verificar que el array no sea vacío
    if(arrayDePalabras.length === 0) {
        return;
    }
    //limpio el div
    document.getElementById('listado').innerHTML = '';
    //recorro el array y voy agregando las palabras
    const ul = document.createElement('ul');

    for(let unaPalabra of arrayDePalabras) {
       // ul += `<li> ${unaPalabra} </li>`;//alt+96
        const li = document.createElement('li')
        li.id = Math.random();
        li.className = 'texto-rojo';
        li.innerHTML = unaPalabra;

        li.addEventListener('click',function() {
            alert('dentro del evento onclick de li')
        });

        ul.appendChild(li);
       }
    document.getElementById('listado').appendChild(ul);
}

function validar(valuePalabra) {
    return valuePalabra !== '';
}