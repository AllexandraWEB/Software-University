//Write a function, which receives a single number – n, and prints a triangle from 1 to n as in the examples.

function triangleOfNumbers(maxRow) {
    for(let num = 1; num <= maxRow; num++) {
        console.log(`${num} `.repeat(num));
    }
}


// triangleOfNumbers(3);
// triangleOfNumbers(5);