// Write a function, which as input will receive a number.

// Check and print if it is amazing or not into the following format:

// "{number} Amazing? {True or False}"

// An amazing number includes the digit 9 the sum of its digits.

// Examples for amazing numbers are 1233 (1 + 2 + 3 + 3 = 9), 583472 (5 + 8 + 3 + 4 + 7 + 2 = 29)

function amazingNumbers (inputNum) {
    inputNum = inputNum.toString();
    let sumOfDigits = 0;

    for (let i = 0; i < inputNum.length; i++) {
        sumOfDigits += Number(inputNum[i]);
    }

    let result = sumOfDigits.toString().includes('9');

    console.log(result ?
        `${inputNum} Amazing? True` :
        `${inputNum} Amazing? False`
    );
}

amazingNumbers(999);