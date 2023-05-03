const buttons: NodeListOf<HTMLInputElement> = document.querySelectorAll('input[type="button"]');
const screenDisplay: null | HTMLInputElement = document.querySelector('input[type="text"]');

const calcuation: string[] = [];

function calculate(button: HTMLInputElement): void {
if (!!!screenDisplay) return
console.log("calculate");
const value: string = button.value;
console.log(value);
let accuumulativeCalculation: string = calcuation.join('');
if (value === "AC") {
screenDisplay.value = screenDisplay.value = "";
console.log(calcuation.length = 0);
return;
} else if (value == "=") {
screenDisplay.value = eval(accuumulativeCalculation);
console.log(eval(accuumulativeCalculation));
return;
} else if (value === "DE") {
screenDisplay.value = screenDisplay.value.slice(0, -1);
return;
}
calcuation.push(value);
accuumulativeCalculation = calcuation.join('');
console.log(accuumulativeCalculation);
screenDisplay.value = accuumulativeCalculation;
}

buttons.forEach((button: HTMLInputElement) => button.addEventListener('click', () => calculate(button)));
console.log(buttons);