let inputs = document.getElementsByClassName("forminput");

for (let i = 0; i < inputs.length; i++) {
  inputs[i].addEventListener("keyup", function () {
    if (this.value.length >= 1) {
      this.nextElementSibling.classList.add("fijar");
    } else {
      this.nextElementSibling.classList.remove("fijar");
    }
  });
}

var select = document.getElementById("Seguros");
var resultadoInput = document.getElementById("result");

select.addEventListener("change", function () {
  var selectedValue = select.options[select.selectedIndex].value;
  if(selectedValue === "Select"){
    select.options[select.selectedIndex].value = "Seguro a contratar";
    resultadoInput.value = select.options[select.selectedIndex].value;
  }else if  (selectedValue === "Basico") {
    select.options[select.selectedIndex].value = "Basico: $500";
    resultadoInput.value = select.options[select.selectedIndex].value;
  }else if(selectedValue === "Intermedio"){
    select.options[select.selectedIndex].value = "Intermedio: $1000";
    resultadoInput.value = select.options[select.selectedIndex].value;
  }else if(selectedValue === "Premium"){
    select.options[select.selectedIndex].value = "Premium: $1500";
    resultadoInput.value = select.options[select.selectedIndex].value;
  }
});
