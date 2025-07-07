function numberInRange (inputArray) {
    let num = Number(inputArray[0]);

    if ((num >= -100 && num <= 100) && num !== 0) {
        console.log("Yes");
    } else {
        console.log("No");
    }
}


//numberInRange(["0"]);