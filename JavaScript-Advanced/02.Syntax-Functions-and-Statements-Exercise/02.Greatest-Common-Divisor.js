// Write a function that takes two positive numbers as input and computes the greatest common divisor.

function greatestCommonDivisor(firstNum, secondNum) {
    let division = firstNum % secondNum; // We find the first % value

    while(division !== 0) { // With the first % value we are dividing until it's 0
        firstNum = secondNum;
        secondNum = division;
        division = firstNum % secondNum;
    }

    console.log(secondNum); // secondNum holds the biggest number that divides both original numbers evenly
}

greatestCommonDivisor(15, 5);