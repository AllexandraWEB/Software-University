// Write a function that sorts an array of numbers so that the first element is the smallest one, the second is the biggest one, 
// the third is the second smallest one, the fourth is the second biggest one, and so on

function sortingNumbers(inputArray) {
    let sortedArray = inputArray.sort((a, b) => a - b); // Ascending order
    let smallestNum = 0;
    let biggestNum = sortedArray.length - 1;
    let result = [];

    while (smallestNum <= biggestNum) {
        result.push(sortedArray[smallestNum]); // Adding the smallest numbers
        smallestNum++;
    
        if (smallestNum <= biggestNum) {
            result.push(sortedArray[biggestNum]); // Adding the biggest numbers
            biggestNum--;
        }
    }
    return result;
}

console.log(sortingNumbers([1, 65, 3, 52, 48, 63, 31, -3, 18, 56]));
