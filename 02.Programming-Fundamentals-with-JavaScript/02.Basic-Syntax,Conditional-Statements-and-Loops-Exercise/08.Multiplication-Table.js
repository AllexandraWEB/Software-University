// You will receive a number as a parameter. Print the 10 times table for this number.

function multiplicationTable(num){
    for(let times = 1; times <= 10; times++) {
        console.log(`${num} X ${times} = ${num * times}`);
    }
}


//multiplicationTable(5);