// The input comes as two numbers. The first value is the number to be rounded and the second is the precision (significant decimal places). If the passed precision is more than 15, it should automatically be reduced to 15.

// Remove trailing zeroes, if any;

function roundedNumbers(num, precision) {
    if(precision > 15){
        precision = 15;
    }

    let fixedNum = num.toFixed(precision);
    console.log(parseFloat(fixedNum));
}

// roundedNumbers(3.1415926535897932384626433832795, 2);