function timePlusFifteen(inputArray) {
    let hours = Number(inputArray[0]);
    let minutes = Number(inputArray[1]);

    let hoursToMinutes = hours * 60;
    let fullTime = hoursToMinutes + minutes;
    let fullTimePlusBonus = fullTime + 15;

    let outputHours = Math.floor(fullTimePlusBonus / 60);
    let outputMinutes = fullTimePlusBonus % 60;

    if (outputHours === 24) {
        outputHours = 0;
    }

    if (outputMinutes < 10) {
        console.log(`${outputHours}:0${outputMinutes}`);
    } else {
        console.log(`${outputHours}:${outputMinutes}`);
    }
}


//timePlusFifteen (["1", "46"]);