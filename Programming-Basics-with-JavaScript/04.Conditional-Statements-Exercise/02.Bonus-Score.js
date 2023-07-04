function bonusPoints(inputArray) {
    let inputNumber = Number(inputArray[0]);

    let bonus = 0.0;

    if (inputNumber <= 100) {
        bonus = 5;
    } else if (inputNumber > 100 && inputNumber <= 1000) {
        bonus = inputNumber * 0.2;
    } else {
        bonus = inputNumber * 0.1;
    }

    if (inputNumber % 2 === 0) {
        bonus += 1;
    } else if (inputNumber % 10 === 5) {
        bonus += 2;
    }

    console.log(bonus);
    console.log(inputNumber + bonus);
}


//bonusPoints(["20"]);