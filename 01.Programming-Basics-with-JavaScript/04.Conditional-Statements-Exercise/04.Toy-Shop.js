function toyShop (inputArray) {
    let tripCost = Number(inputArray[0]);
    let puzzlesNumber = Number(inputArray[1]);
    let talkingDollsNumber = Number(inputArray[2]);
    let teddyBearsNumber = Number(inputArray[3]);
    let minionsNumber = Number(inputArray[4]);
    let trucksNumber = Number(inputArray[5]);

    let costOfToys = 
    puzzlesNumber * 2.6 + 
    talkingDollsNumber * 3 + 
    teddyBearsNumber * 4.1 + 
    minionsNumber * 8.2 + 
    trucksNumber * 2;

    if (puzzlesNumber + talkingDollsNumber + teddyBearsNumber + minionsNumber + trucksNumber >= 50) {
      costOfToys -= costOfToys * 0.25;
    }

    costOfToys -= costOfToys * 0.1;

   if (costOfToys >= tripCost) {
    console.log(`Yes! ${(costOfToys - tripCost).toFixed(2)} lv left.`);
   } else {
    console.log(`Not enough money! ${(tripCost - costOfToys).toFixed(2)} lv needed.`)
   }
}


//toyShop (["40.8","20","25","30","50","10"])
