// Write a JavaScript function to get the number of days in a month.
// The input comes as two numeric parameters. The first element is the month, the second is the year.
// The output must return the number of days in a month for a given year.

function daysInMonth(month, year) {

    const totalDays = new Date(year, month, 0).getDate();
    console.log(totalDays);
}

daysInMonth(1, 2012);
daysInMonth(2, 2021);

// Normally, new Date(year, month, day) gives you a specific date.
// BUT in case of new Date(2024, 2, 0)
// JavaScript gives the day before February 1st, which is January 31st.


