// Write a function that takes an integer number as an input and checks if all the digits in a given number are the same or not.
// Print on the console true if all numbers are the same and false if not. On the next line, print the sum of all digits.
// The input comes as an integer number.

function sameNumbers(inputNum) {
    const str = Math.abs(inputNum).toString(); // Take care of the any negative numbers + transform it into string
    const firstDigit = str[0]; // We tranform it into a string in order to locate the first digit using for loop to go though the whole str
    let allSame = true;
    let totalResult = 0;

    for (let i = 0; i < str.length; i++) { // We go through each digit one by one
        totalResult += Number(str[i]); // We transform it back into number
        
        if (str[i] !== firstDigit) { // We are checking if the digits are the same
            allSame = false;
        }
    }

    console.log(allSame);
    console.log(totalResult);
}

sameNumbers(2222222); 
sameNumbers(1234);  