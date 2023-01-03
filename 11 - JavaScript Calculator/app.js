const buttons = document.querySelectorAll("button");
const screenDisplay = document.querySelector(".screen");

let calculation = [];
let acumulativeCalculation;

function calculate(button) {
  const value = button.textContent;

  if (value === "CLR") {
    calculation = [];
    screenDisplay.textContent = ".";
  } else if (value === "=") {
    screenDisplay.textContent = eval(acumulativeCalculation);
  } else {
    calculation.push(value);
    acumulativeCalculation = calculation.join("");
    screenDisplay.textContent = acumulativeCalculation;
    console.log(calculation);
  }
}

buttons.forEach((button) =>
  button.addEventListener("click", () => calculate(button))
);
