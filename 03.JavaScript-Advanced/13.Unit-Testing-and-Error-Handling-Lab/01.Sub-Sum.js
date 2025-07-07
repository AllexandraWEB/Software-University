// If the first element is not an array, return NaN
// If the start index is less than zero, consider its value to be a zero
// If the end index is outside the bounds of the array, assume it points to the last index of the array

function subSum(inputArray, startIndex, endIndex) {
    if(Array.isArray(inputArray) === false) { // Checks if the first element is not an array, it returns NaN
        return NaN;
    }

    let sum = 0;

    if(startIndex < 0) {
        startIndex = 0;
    }

    if(endIndex >= inputArray.length) {
        endIndex = inputArray.length - 1;
    }

    for(let i = startIndex; i <= endIndex; i++) {
        sum += Number(inputArray[i])
    }

    return sum;
}

console.log(subSum([10, 20, 30, 40, 50, 60], 3, 300));
console.log(subSum([1.1, 2.2, 3.3, 4.4, 5.5], -3, 1));
console.log(subSum([], 1, 2));
console.log(subSum('text', 0, 2));
console.log(subSum([10, 'twenty', 30, 40], 0, 2 ));
