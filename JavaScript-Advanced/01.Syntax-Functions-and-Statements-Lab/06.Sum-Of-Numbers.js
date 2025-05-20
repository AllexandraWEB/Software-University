// Write a JS function that takes two numbers n and m as an input and prints the sum of all numbers from n to m.
// The input comes as two string elements that need to be parsed as numbers.
// The output should return the sum.

function sumOfNumbers(strN, strM) {
    let firstNum = Number(strN);
    let lastNum = Number(strM);

    let result = 0;

    for(let i = firstNum; i <= lastNum; i++) { // i is a variable that starts at the first number. Untill the i is <= to the last number, the loop continues
        result += i;
    } 
    console.log(result);
}

sumOfNumbers("1", "5");
