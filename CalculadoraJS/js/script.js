var num1Input = document.getElementById("num1_input");
var num1InputValue = num1Input.value;

var num2Input = document.getElementById("num2_input");
var num2InputValue = num2Input.value;

const somaBtn = document.getElementById("mais");
const subBtn = document.getElementById("menos");

var textArea = document.getElementById("resultArea");

var resultado;

function somar() {
  const num1 = parseFloat(num1Input.value);
  const num2 = parseFloat(num2Input.value);
  if (isNaN(num1) || isNaN(num2)) {
    textArea.value = "Erro";
  } else {
    const resultado = num1 + num2;
    textArea.value = resultado;
  }

    num1Input.value = "";
    num2Input.value = "";
}

function subtrair() {
  const num1 = parseFloat(num1Input.value);
  const num2 = parseFloat(num2Input.value);
  if (isNaN(num1) || isNaN(num2)) {
    textArea.value = "Erro";
  } else {
    const resultado = num1 - num2;
    textArea.value = resultado;
  }

    num1Input.value = "";
    num2Input.value = "";
}


somaBtn.addEventListener("click", () => somar());
subBtn.addEventListener("click", () => subtrair());