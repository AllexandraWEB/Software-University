function numberBetween(inputArray) {
    num = Number(inputArray[0]);

    if (num < 100) {
        console.log("Less than 100");
    } else if (num <= 200) {
        console.log("Between 100 and 200");
    } else {
        console.log("Greater than 200");
    }
}

numberBetween(["95"]);
numberBetween(["120"]);