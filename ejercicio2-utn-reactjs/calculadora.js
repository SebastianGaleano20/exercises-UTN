const inputOperando = document.getElementById("op1");
const inputTotal = document.getElementById("op2");
const botones = document.querySelectorAll(".btn");
const error = "Ingrese una operacion valida porfavor."
console.log(inputOperando.value);
botones.forEach((boton) => {
  boton.addEventListener("click", () => {
    const botonApretado = boton.textContent;
    if (
      botonApretado === "+" ||
      botonApretado === "-" ||
      botonApretado === "x" ||
      botonApretado === "/"
    ) {
      inputOperando.value += botonApretado;
      return;
    }if (boton.id === "total") {
      try{
        const total = eval(inputOperando.value);
        inputTotal.value = total;
        inputOperando.value = "";
      }catch{
        inputTotal.value = "Error";
      }
    }
     if(inputTotal.value === "Error"){
        inputOperando.value = "";
     }
  })
});
