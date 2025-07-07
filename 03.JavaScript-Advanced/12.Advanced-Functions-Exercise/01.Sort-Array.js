// Write a function that sorts an array with numeric values in ascending or descending order, depending on an argument that is passed to it.

function sortArray(inputArray, command) {
    if(command === "asc") {
       return inputArray.sort((a,b) => a - b);
    } else {
       return inputArray.sort((a,b) => b - a); 
    }
}

console.log(sortArray([14, 7, 17, 6, 8], 'asc'));
console.log(sortArray([14, 7, 17, 6, 8], 'desc'));

// Second solution

function arraySorted(inputArray, command) {
   return command === "asc" ? inputArray.sort((a,b) => a - b) : inputArray.sort((a,b) => b - a);
}

console.log(arraySorted([14, 7, 17, 6, 8], 'asc'));
console.log(arraySorted([14, 7, 17, 6, 8], 'desc'));
