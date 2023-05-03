var buttons = document.querySelectorAll('input[type="button"]');
var screenDisplay = document.querySelector('input[type="text"]');
var calcuation = [];
function calculate(button) {
    console.log("calculate");
    var value = button.value;
    console.log(value);
    var accuumulativeCalculation = calcuation.join('');
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
buttons.forEach(function (button) { return button.addEventListener('click', function () { return calculate(button); }); });
console.log(buttons);
