function sumToSeconds(inputArray) {
    let firstTime = Number(inputArray[0]);
    let secondTime = Number(inputArray[1]);
    let thirdTime = Number(inputArray[2]);

    let totalTime = firstTime + secondTime + thirdTime;

    let minutes = Math.floor(totalTime / 60);
    let seconds = totalTime % 60;

    if (seconds < 10) {
        console.log(`${minutes}:0${seconds}`);
    } else {
         console.log(`${minutes}:${seconds}`);
    }
}