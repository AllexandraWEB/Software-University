// Write a JS function that takes three string arguments as an input. 
// Calculate the sum of the length of the strings and the average length of the strings rounded down to the nearest integer.
// The input comes as three string arguments passed to your function.

function stringLength(firstStr, secondStr, thirdStr) {

    let strSum = firstStr.length + secondStr.length + thirdStr.length;
    let averageLength = Math.floor(sum / 3); // Calculating the average length

    console.log(`${strSum}`);
    console.log(`${averageLength}`);
}

stringLength("chocolate", "ice cream", "cake");

