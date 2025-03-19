function lastDigitProgram(num) {
    lastDigit = num % 10; // Finding the last digit
    
    switch(lastDigit){
        case 1:
            console.log("one");
            break;
        case 2:
            console.log("two");
            break;
        case 3:
            console.log("three");
            break;
        case 4:
            console.log("four");
            break;
        case 5:
            console.log("five"); 
            break;
        case 6:
            console.log("six");
            break;
        case 7:
            console.log("seven");
            break;
        case 8:
            console.log("eight");
            break;
        case 9:
            console.log("nine");
            break;
        default:
            console.log("zero");
    }
}

// lastDigitProgram(512);
// lastDigitProgram(52167);

function getLastDigitName(number) {
    // Array mapping digits (0-9) to their English names
    const digitNames = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];
    
    // Extract the last digit of the given number
    let lastDigit = number % 10; 
    
    // Use the last digit as an index to retrieve its corresponding English name
    return digitNames[lastDigit];
}

function printLastDigitName(number) {
    // Calls getLastDigitName function to retrieve the last digit's English name
    // Then prints the result to the console
    console.log(getLastDigitName(number));
}

// printLastDigitName(12356); 