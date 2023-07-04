function sumOfNumbers(inputArray) {
    let num = inputArray[0];
    let sumNumbers = 0;

    for (let i = 0; i < num.length; i++) {
        let curDigits = Number(num[i]);
        sumNumbers += curDigits
    }

    console.log(`The sum of the digits is:${sumNumbers}`);
}


//sumOfNumbers(["1234"]);