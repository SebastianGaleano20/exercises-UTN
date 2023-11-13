function suma(n1, n2, resultado) {
  //Creamos una funcion callback que llama a otra funcion para imprimir un mensaje de respuesta al usuario
  let respuesta = n1 + n2; //la funcion principal es la suma
  resultado(respuesta); //por ultimo el tercer parametro recibe una funcion que utiliza el resultado como parametro
}
function mensajeResultado(resultado) {
  //Creamos la funcion a utilizar dentro del callback
  console.log(`El resultado de la suma es: ${resultado}`);
}

let operandos = suma(9, 12, mensajeResultado); //En consola nos muestra el resultado final utilizando todos los procesos correctamente
