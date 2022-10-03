const nuevoVector = []
const ventas = [1500, 2500, 750, 230];

if (ventas[0]>750) {
    nuevoVector.push(ventas[0])
}

let unaVenta = 1


const filtrados = ventas.filter(unaVenta => unaVenta > 750);
filtrados.reduce((a,b) => a+b, 0 )


const ventas.map (unaVenta => 'Se vendió' + unaVenta);

