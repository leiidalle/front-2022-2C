
function Resumen(categoria, cantidad) {
  // debugger;
  cantidad = document.getElementById('Cantidad').value;
  categoria = document.getElementById('Categoria').value;

  if (categoria === 'Estudiante') document.getElementById('Total').innerHTML = `$${(cantidad * 40)}`;
  else if (categoria === 'Trainee') document.getElementById('Total').innerHTML = `$${(cantidad * 100)}`;
  else document.getElementById('Total').innerHTML = `$${(cantidad * 170)}`;
}