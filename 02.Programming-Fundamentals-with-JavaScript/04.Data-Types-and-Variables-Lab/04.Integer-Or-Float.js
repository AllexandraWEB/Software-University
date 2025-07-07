// You will receive 3 parameters (string, char, string). The first string will be a word with a missing char replaced with an underscore '_'. You have to replace the missing character (underscore) of the first string with the character passed as the second parameter and compare the result with the second string.

// If they are equals, you should print "Matched", otherwise print "Not Matched


function intererOrFloat(firstNum, secondNum, thirdNum) {
    let sumOfNumbers = firstNum + secondNum + thirdNum; // We need the whole sum of the numbers

    if (sumOfNumbers % 1 === 0 ) {  // We are cheking if the number ends with remainder after devision
        console.log(`${sumOfNumbers} - Integer`);
    } else {
        console.log(`${sumOfNumbers} - Float`);
    }
}

intererOrFloat(100, 200, 303);