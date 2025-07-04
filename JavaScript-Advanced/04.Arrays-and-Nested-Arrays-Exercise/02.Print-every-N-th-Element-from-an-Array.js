// The input comes as two parameters – an array of strings and a number. The second parameter is N – the step.
// The output is every element on the N-th step starting from the first one.
// If the step is 3, you need to return the 1-st, the 4-th, the 7-th … and so on, until you reach the end of the array.

function printEveryNElement(inputArray, step) {
    let updatedArray = []; // Creating an empty array

    for(let i = 0; i < inputArray.length; i += step) { // We increment with the step value
        updatedArray.push(inputArray[i]); // Push the element on every step value
    } 
    return updatedArray;
}

console.log(printEveryNElement(["5", "20", "31", "4", "20"], 2));
console.log(printEveryNElement(['1', '2', '3', '4', '5'], 6));
