function numbersDivisibleBy9(inputArray) {
    let startNum = Number(inputArray[0]);
    let endNum = Number(inputArray[1]);

    let sum = 0;
    let validNums = "";

    for (let curNum = startNum; curNum <= endNum; curNum++) {
        if (curNum % 9 === 0) {
            sum += curNum;
            validNums += curNum + "\n"
        }
    }

    console.log(`The sum: ${sum}`);
    console.log(validNums);
}


//numbersDivisibleBy9(["100", "200"]);

