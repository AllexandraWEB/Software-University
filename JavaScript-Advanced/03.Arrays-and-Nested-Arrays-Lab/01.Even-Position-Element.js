// Write a function that finds the elements at even positions in an array.

function evenPositions(inputArray) {
    let totalResult = ""

    for(let i = 0; i < inputArray.length; i++) {
        if(i % 2 === 0) {
            totalResult += inputArray[i];
            totalResult += " ";
        }
    }
    console.log(totalResult);
}

evenPositions(["20", "30", "40", "50", "60"]);
