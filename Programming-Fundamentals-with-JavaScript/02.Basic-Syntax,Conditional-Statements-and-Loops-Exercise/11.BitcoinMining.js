// Write a JavaScript program that calculates the total amount of bitcoins you purchased with the gold you mined during your shift at the mine.
// Your shift consists of a certain number of days where you mine an amount of gold in grams.
// Your program will receive an array with the amount of gold you mined each day, where the first day of your shift is the first index of the array
// Also, someone was stealing every third day from the start of your shift 30% from the mined gold for this day.
// You need to check, which day you have enough money to buy your first bitcoin. For the different exchanges use these prices:

// 1 Bitcoin 11949.16 lv.
// 1 g of gold 67.51 lv

function bitcoinMining(inputArray) {
    let daysCounter = 0;
    let firstDay = 0;
    let day = 0;
    let totalGold = 0;
    let totalPrice = 0;
    let bitCoinPurchased = 0;

    for(let i = 0; i < inputArray.length; i++) {
        day++;
        daysCounter++;
        totalGold = 0;

        if(day % 3 === 0) {
            totalGold += inputArray[i] * 0.7;
        } else if(day % 3 != 0){
            totalGold += inputArray[i];
        }

        totalPrice = totalPrice + totalGold * 67.51;
    

    if(totalPrice >= 11949.16) {
        if(bitCoinPurchased === 0) {
            firstDay = daysCounter;
            while (totalPrice >= 11949.16) {
                totalPrice -= 11949.16;
                bitCoinPurchased++;
            }
        } else if (bitCoinPurchased >= 1) {
            while (totalPrice >= 11949.16) {
                totalPrice -= 11949.16;
                bitCoinPurchased++;
            }
        }
    }
}

console.log(`Bought bitcoins: ${bitCoinPurchased}`);
        if(bitCoinPurchased >= 1) {
            console.log(`Day of the first purchased bitcoin: ${firstDay}`);
}
    console.log(`Left money: ${totalPrice.toFixed(2)} lv.`);
}

bitcoinMining([100, 200, 300]);