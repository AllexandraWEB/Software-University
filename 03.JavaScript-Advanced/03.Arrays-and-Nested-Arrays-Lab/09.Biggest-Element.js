// Write a function that finds the biggest element inside a matrix.
// The input comes as an array of arrays, containing number elements (2D matrix of numbers).

function biggestElement(inputArray) {
    let combinedArray = inputArray.flat(); // Combines all inner arrays

    let maxNumber = Math.max(...combinedArray);
    return maxNumber
}

console.log(biggestElement([[20, 50, 10],[8, 33, 145]]));
