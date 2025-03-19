function nextDay(year, month, day) {
    let currentDate = new Date(year, month - 1, day); // JavaScript months are zero-indexed, so subtract 1 from the month.

    currentDate.setDate(currentDate.getDate() +1); // Add one day to the current date

    let nextYear = currentDate.getFullYear();
    let nextMonth = currentDate.getMonth() + 1;  // Adjust because months are 0-indexed
    let nextDay = currentDate.getDate();

    console.log(`${nextYear}-${nextMonth}-${nextDay}`);
}

//nextDay(2016, 9, 30);