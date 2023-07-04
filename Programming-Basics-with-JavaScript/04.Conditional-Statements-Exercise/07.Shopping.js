function shopping(inputArray) {
    let budget = Number(inputArray[0]);
    let videocardsNumber = Number(inputArray[1]);
    let processorsNumber = Number(inputArray[2]);
    let ramNumber = Number(inputArray[3]);

    let videocardsCost = videocardsNumber * 250;
    let processorsCost = videocardsCost * 0.35;
    let ramCost = videocardsCost * 0.1;

    let totalCost = videocardsCost + processorsCost * processorsNumber + ramCost * ramNumber;

    if(videocardsNumber > processorsNumber) {
        totalCost -= totalCost * 0.15;
    }

    if (budget >= totalCost) {
       console.log(`You have ${(budget - totalCost).toFixed(2)} leva left!`);
    } else {
        console.log(`Not enough money! You need ${(totalCost - budget).toFixed(2)} leva more!`)
    }
}


//shopping(["900","2","1","3"]);
