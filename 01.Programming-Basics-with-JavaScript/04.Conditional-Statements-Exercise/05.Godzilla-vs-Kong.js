function movieResources(inputArray) {
    let movieBuget = Number(inputArray[0]);
    let peopleNumber = Number(inputArray[1]);
    let clothPricePerPerson = Number(inputArray[2]);

    let decorPrice = movieBuget * 0.1;
    let clothPrice = peopleNumber * clothPricePerPerson;

    if (peopleNumber > 150) {
        clothPrice -= clothPrice * 0.1;
    }

    let totalCost = decorPrice + clothPrice;

    if(movieBuget >= totalCost) {
        console.log("Action!");
        console.log(`Wingard starts filming with ${(movieBuget - totalCost).toFixed(2)} leva left.`);
    } else {
        console.log("Not enough money!");
        console.log(`Wingard needs ${(totalCost - movieBuget).toFixed(2)} leva more.`);
    }
}


//movieResources(["20000","120","55.5"]);
//movieResources(["15437.62","186","57.99"]);

