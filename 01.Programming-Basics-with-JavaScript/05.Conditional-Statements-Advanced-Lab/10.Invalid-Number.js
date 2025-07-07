function invalidNumber (inputArray) {
    let num = Number(inputArray[0]);
    let isValid = (num >= 100 && num <= 200) || num === 0;

    if (!isValid) {
        console.log("invalid");
    }
}


//invalidNumber(["75"]);