// Write a function that calculates and returns the sum of the first and the last elements in an array.
// The input comes as an array of string elements holding numbers.

function sumFirstLast(inputArray) {
    let overallSum = Number(inputArray.shift()) + Number(inputArray.pop());

    // shift() returns the removed array element:
    // The pop() method removes (pops) the last element of an array. It also return the removed element
    console.log(overallSum);
}

sumFirstLast(['20', '30', '40']);