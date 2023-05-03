"use strict";
const buttons = document.querySelectorAll('input[type="button"]');
const screenDisplay = document.querySelector('input[type="text"]');
const calcuation = [];
function calculate(button) {
    if (!!!screenDisplay)
        return;
    console.log("calculate");
    const value = button.value;
    console.log(value);
    let accuumulativeCalculation = calcuation.join('');
    if (value === "AC") {
        screenDisplay.value = screenDisplay.value = "";
        console.log(calcuation.length = 0);
        return;
    }
    else if (value == "=") {
        screenDisplay.value = eval(accuumulativeCalculation);
        console.log(eval(accuumulativeCalculation));
        return;
    }
    else if (value === "DE") {
        screenDisplay.value = screenDisplay.value.slice(0, -1);
        return;
    }
    calcuation.push(value);
    accuumulativeCalculation = calcuation.join('');
    console.log(accuumulativeCalculation);
    screenDisplay.value = accuumulativeCalculation;
}
buttons.forEach((button) => button.addEventListener('click', () => calculate(button)));
console.log(buttons);
