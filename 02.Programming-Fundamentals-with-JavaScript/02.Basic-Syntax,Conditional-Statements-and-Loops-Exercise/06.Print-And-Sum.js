//Write a function that displays numbers from given start to given end and their sum. The input comes as two number parameters

function printAndSum(start, end) {
    let numsStr = "";
    let sum = 0;

    for (let num = start; num <= end; num++) {
        numsStr += num + " ";
        sum += num;
    }

    console.log(numsStr);
    console.log(`Sum: ${sum}`);
}


//printAndSum(5, 10);
//printAndSum(5, 20);