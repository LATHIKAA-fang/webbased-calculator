let currentInput = "";
let operator = "";
let firstValue = "";


function appendNumber(num) {
    currentInput += num;

    if (operator === "") {
        // No operator yet
        document.getElementById("display").value = currentInput;
    } else {
        // Show full expression
        document.getElementById("display").value =
            firstValue + " " + operator + " " + currentInput;
    }
}

function setOperator(op) {
    if (currentInput === "") return;

    firstValue = currentInput;
    operator = op;
    currentInput = "";

    // Show operator immediately
    document.getElementById("display").value =
        firstValue + " " + operator;
}


function calculate() {
    let num1 = parseFloat(firstValue);
    let num2 = parseFloat(currentInput);
    let result;

    if (operator === "+") result = num1 + num2;
    else if (operator === "-") result = num1 - num2;
    else if (operator === "*") result = num1 * num2;
    else if (operator === "/") result = num1 / num2;

    document.getElementById("display").value = result;
    currentInput = result.toString();
}


function clearDisplay() {
    currentInput = "";
    firstValue = "";
    operator = "";
    document.getElementById("display").value = "";
}


function squareRoot() {
    let num = parseFloat(currentInput);
    let result = Math.sqrt(num);
    document.getElementById("display").value = result;
    currentInput = result.toString();
}

function cubeRoot() {
    let num = parseFloat(currentInput);
    let result = Math.cbrt(num);
    document.getElementById("display").value = result;
    currentInput = result.toString();
}



function deleteLast() {
    if (currentInput.length > 0) {
        currentInput = currentInput.slice(0, -1);
        document.getElementById("display").value = currentInput;
    }
}
