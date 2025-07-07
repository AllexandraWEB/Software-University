// Write a JS function that takes two numbers and a string as an input. 
// The string may be one of the following: '+', '-', '*', '/', '%', '**'.
// Print on the console the result of the mathematical operation between both numbers and the operator you receive as a string.

function mathOperations(firstNum, secondNum, strOperation) {
    let result;

    switch(strOperation) {
        case "+":
            result = firstNum + secondNum;
            break;
        case "-":
            result = firstNum - secondNum;
            break;
        case "*":
            result = firstNum * secondNum;
            break;
        case "/":
            result = firstNum / secondNum;
            break;
        case "%":
            result = firstNum % secondNum;
            break;
        case "**":
            result = firstNum ** secondNum;
            break;
    }

    console.log(result);
}

mathOperations(5, 6, '+'); 
