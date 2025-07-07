// ?? Write a JS function that calculates the date of the previous day by a given year, month, and day.

function getPreviousDay(year, month, day) {
    let currentDate = new Date(year, month - 1, day - 1); // month - 1 because JavaScript months start from index 0, day - 1 because we need the previous date

    console.log(`${currentDate.getFullYear()}-${currentDate.getMonth() + 1}-${currentDate.getDate()}`); // Now we add + 1 to the month to receive the correct month
}

function getPreviousDaySecondVersion(year, month, day) {
    let currentDate = new Date(year, month - 1, day); // (month - 1 because JavaScript months start from index 0)

    currentDate.setDate(currentDate.getDate() - 1); // Set a new date when you - 1 from it. We can use setter or day - 1

    console.log(`${currentDate.getFullYear()}-${currentDate.getMonth() + 1}-${currentDate.getDate()}`); // Now we add + 1 to the month to receive the correct month
}

getPreviousDay(2016, 9, 30);
getPreviousDaySecondVersion(2016, 9, 30);