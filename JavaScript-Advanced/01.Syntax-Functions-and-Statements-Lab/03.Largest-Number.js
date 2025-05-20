// Write a function that takes three number arguments as input and finds the largest of them

function largestNumber(firstNum, secondNum, thirdNum) {
    let result;

    if (firstNum > secondNum && firstNum > thirdNum) {
        result = firstNum; // If the firstNum is bigger than the secondNum AND ( && ) thirdNum, this means that is firstNum is the largest number
    } else if (secondNum > firstNum && secondNum > thirdNum) {
        result = secondNum;
    } else if (thirdNum > firstNum && thirdNum > secondNum) {
        result = thirdNum
    }

    console.log(`The largest number is ${result}.`);
}

largestNumber(5, -3, 16); 