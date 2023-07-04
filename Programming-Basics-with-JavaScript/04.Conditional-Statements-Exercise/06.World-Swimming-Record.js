function worldSwimmingRecord(inputArray) {
    let currentRecordInSeconds = Number(inputArray[0]);
    let meters = Number(inputArray[1]);
    let timeInSecondsForMeterSwimming = Number(inputArray[2]);

    let slowing = Math.floor(meters / 15) * 12.5;
    let clearTimeOfSwimming = meters * timeInSecondsForMeterSwimming;
    let fullTimeOfSwimming = clearTimeOfSwimming + slowing;

    if (fullTimeOfSwimming >= currentRecordInSeconds) {
        console.log(`No, he failed! He was ${(fullTimeOfSwimming - currentRecordInSeconds).toFixed(2)} seconds slower.`);
    } else {
        console.log(`Yes, he succeeded! The new world record is ${(fullTimeOfSwimming).toFixed(2)} seconds.`)
    }

}


//worldSwimmingRecord(["10464", "1500", "20"]);
