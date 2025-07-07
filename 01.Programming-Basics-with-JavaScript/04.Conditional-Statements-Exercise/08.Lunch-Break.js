function lunchBreak(inputArray) {
    let titleOfTVSeries = inputArray[0];
    let episodeLength = Number(inputArray[1]);
    let breakLength = Number(inputArray[2]);

    let timeForLunch = breakLength  / 8;
    let timeForRest = breakLength / 4;
    let timeLeft = breakLength - timeForLunch - timeForRest;

    if(timeLeft >= episodeLength) {
        console.log(`You have enough time to watch ${titleOfTVSeries} and left with ${Math.ceil(timeLeft - episodeLength)} minutes free time.`);
    } else {
        console.log(`You don't have enough time to watch ${titleOfTVSeries}, you need ${Math.ceil(episodeLength - timeLeft)} more minutes.`)
    }
}


//lunchBreak(["Game of Thrones", "60", "96"]);
//lunchBreak(["Teen Wolf", "48", "60"]);

