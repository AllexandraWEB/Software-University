function workingHours(inputArray) {
    let hour = Number(inputArray[0]);
    let day = inputArray[1];

    switch (day) {
        case "Monday":
        case "Tuesday":
        case "Wednesday":
        case "Thursday":
        case "Friday":
        case "Saturday":
            if (hour >= 10 && hour <= 18) {
                console.log("open");
            } else {
                console.log("closed");
            }
            break;
       case "Sunday":
            console.log("closed");
            break;
    }
}


//workingHours(["11", "Monday"]);
