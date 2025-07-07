function numbersEndWithStep3(inputArray) {
    let endNumber = Number(inputArray[0]);

    for(let currentNumber = 1; currentNumber <= endNumber; currentNumber += 3) {
        console.log(currentNumber);
    }
}


//numbersEndWithStep3(["15"]);