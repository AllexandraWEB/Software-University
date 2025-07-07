// Write a function that prints a number between 1 and 7 when a day of the week is passed to it as a string and an error message if the string is not recognized.

function dayOfWeek(inputStr) {
    let weekDay;

    switch(inputStr) {
        case "Monday":
            weekDay = 1;
            break;
        case "Tuesday":
            weekDay = 2;
            break;
        case "Wednesday":
            weekDay = 3;
            break;
        case "Thursday":
            weekDay = 4;
            break;
        case "Friday":
            weekDay = 5;
            break;
        case "Saturday":
            weekDay = 6;
            break;
        case "Sunday":
            weekDay = 7;
            break;
        default:
            weekDay = "error";
        }

    console.log(weekDay);
}

dayOfWeek("Monday");
dayOfWeek("Invalid");
