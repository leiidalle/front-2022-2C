const persona = [
{
    dni: 12345679,
    nombre:'pablo',
    direcciones: [
        {
            calle: 'av siempre viva',
            localidad: {
                cp:1222,
                nombre: 'caba',
            }
        },
        {
            calle:'calle14',
            localidad: {
                cp: 1247,
                nombre: 'amba',
            } 
        },
    ]
},
{
    dni: 12345678,
    nombre:'juan',
    direcciones: [
        {
            calle:'calle16',
            localidad: {
                cp: 1237,
                nombre: 'amba',
            } 
        },
    ]
}
];
console.log(persona);
//ahora convierto a json pero como string
const strPersona = JSON.stringify(persona);
console.log(strPersona);
//console.log(persona.nombre);

//ahora "Parseo" strPersona a un objeto
const otraPersona = JSON.parse(strPersona);
console.log(otraPersona)

//Averiguar si existe el CP 1237
//const existecp = persona.direcciones.some(dir => dir.localidad.cp === 1237);
//console.log(existecp)

let existe = false;
for(let i = 0; i < persona.length; i++) {
    const existe = persona[i].direcciones.some(dir => dir.localidad.cp === 1237);
}
console.log(existe);

//usando un map
const dirs = persona.map(p => p.direcciones);
console.log(dirs);

const dirFlat = dirs.flat();
console.log(dirFlat);

const existeV3 = dirFlat.some(d => d.localidad.cp === 1237);
console.log(existeV3);
//___________________

let array1 = [1,2,3,[4,5,6],7,8];
//              [1,2,3,4,5,6,7,8]
array1 = array1.flat();
console.log(array1);

//dibujar los datos de la persona en un div
function CrearDivPersona(persona) {
    const divPersona = document.getElementById('contenidoExterno');
    persona.forEach(persona => {
        divPersona.innerHTML += CrearCardPersona(persona);
    });
}

function CrearCardPersona(unaPersona) {
    const html = `<div class="card" style="width: 18rem;">
    <img src="..." class="card-img-top" alt="...">
    <div class="card-body">
    <h5 class="card-title">${unaPersona.nombre}</h5>
    <p class="card-text">${CrearDirecciones(unaPersona.direcciones)}</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
    </div>
    </div>`;
return html;
}

function CrearDirecciones(direccion) {
    let dirs = 'ul';
    const dires =direccion.forEach(
        d => dirs += '<li>' + d.calle + ',' + d.numero
    );
    return dirs + dires + '</ul>';
}

//inicio
//invocando la función CrearDivPersona
CrearDivPersona(persona);
