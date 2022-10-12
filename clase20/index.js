/*function test() {
    alert('Buscando');
}*/
function buscar(texto){
    //recorrer el json.data 
    const usuariosfiltrado = json.data.filter(u => u.first_name.includes(texto) || u.last_name.includes(texto))
    const Users = Users(usuariosfiltrado);
}

//funcion principal
function render() {
    
    //invoco la funcion que esta en el archivo navbar.js
    const parametros = {
        contenedor: 'navbar',
        titulo: 'MI NAVBAR',
        fnTest: buscar
    };

    Navbar(parametros);

    //console.log(json);
    const users = Users(json.data);
    document.getElementById('users').innerHTML = users
}

//invocar a la funcion
render();