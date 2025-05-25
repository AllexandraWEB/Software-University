// Write a JS function that rotates an array.
// The array should be rotated to the right side, meaning that the last element should become the first, upon rotation.

function rotateArray(inputArray, rotationTimes) {
    rotations = rotationTimes % inputArray.length;

    for (let i = 0; i < rotationTimes; i++) {
        let lastElement = inputArray.pop();  // Remove last element
        inputArray.unshift(lastElement);  // Add it to the front
    }

    console.log(inputArray.join(' '));  
}

rotateArray(["1", "2", "3", "4"], 2);
