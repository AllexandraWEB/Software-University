// Write a function that prints the two smallest elements from an array of numbers.

function smallestTwoNumbers(inputArray) {
    let smallestNumber = Infinity;
    let secondSmallestNumber = Infinity;

    for(let i = 0; i < inputArray.length; i++) {
        let currentNum = inputArray[i];

        if(currentNum < smallestNumber) {
            secondSmallestNumber = smallestNumber;
            smallestNumber = currentNum;
        } else if (currentNum < secondSmallestNumber) {
            secondSmallestNumber = currentNum;
        }
    }

    console.log(smallestNumber);
    console.log(secondSmallestNumber);
    
}

smallestTwoNumbers([30, 15, 50, 5]);

function smallestNumbers(inputArray){
    inputArray.sort((a, b) => a - b) // Ascending order

    let smallestTwoNumber = [] // Making an empty array

    smallestTwoNumber.push(inputArray[0], inputArray[1]) // Pushing the first and second index (0 and 1) into the empty array

    console.log(smallestTwoNumber.join(' ')); // Join by space
    }

    
smallestNumbers([3, 0, 10, 4, 7, 3])