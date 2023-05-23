function calcular() {
  var cantidad = document.getElementById("cantidad").value;

  var select = document.getElementById("categoria");
  var select_activo = select.options[select.selectedIndex].value;

  var resultado = 0;

  switch ((select_activo = parseInt(select_activo))) {
    case 1:
      resultado = parseInt(cantidad) * (200 * 0.2);
      break;
    case 2:
      resultado = parseInt(cantidad) * (200 * 0.5);
      break;
    case 3:
      resultado = parseInt(cantidad) * (200 * 0.85);
      break;
  }

  document.getElementById("total").value = resultado;
}

function borrar() {
  document.getElementById("total").value = 0;
}
