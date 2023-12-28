// 1. Divisible by 4 but not by 100 
// 2. Divisible by 400

function leapYear(year) {
    if ((year % 4 === 0 && year % 100 != 0) || (year % 400 === 0)) {
        console.log("yes");
    } else {
        console.log("no");
    }
}


//leapYear(1984)