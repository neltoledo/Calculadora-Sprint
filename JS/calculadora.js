var resultado = document.getElementById('resultado');
var operacion = '';
var operator = false;
let total = 0;

function introducirNumero(numero) {

  operacion += numero;
  resultado.value = operacion;

  operator = false;

}

function operador(operador) {

  if (operator) {
    alert("No se pueden ingresar dos operadores consecutivos");
    return;
  }

  operacion += operador;
  resultado.value = operacion;
  operator = true;
 
}

function limpiar() {
  operacion = '';
  resultado.value = '';
}



function calcular() {


 if (operacion === "" || operacion[operacion.length - 1] === "+" || operacion[operacion.length - 1] === "-" || operacion[operacion.length - 1] === "*" || operacion[operacion.length - 1] === "/") {
  alert("Operación no válida");
  return;
}
  resultado.value = eval(operacion);
  operacion = resultado.value;
}