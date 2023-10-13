
var display = document.getElementById("display");

function appendToDisplay(value) {
    display.value += value;
}

function clearDisplay() {
    display.value = "";
}

function deleteLastCharacter() {
    var currentValue = display.value;
    display.value = currentValue.substring(0, currentValue.length - 1);
}

function calculateResult() {
    try {
        var result = eval(display.value);
        display.value = result;
    } catch (error) {
        display.value = "Error";
    }
}
