function depositCalculator(inputArray) {
    let depositAmount = Number(inputArray[0]);
    let depositTime = Number(inputArray[1]);
    let yearInterest = Number(inputArray[2]);

    console.log(depositAmount + depositTime * ((depositAmount * yearInterest / 100) /12));
}


//depositCalculator (["200", "3", "5.7"]);
//depositCalculator (["2350", "6", "7"]);
