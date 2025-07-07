//Monday	Tuesday	 Wednesday	Thursday	Friday	Saturday	Sunday
//12	    12	     14	        14	        12	    16	        16

function cinemaTicket (inputArray) {
    let day = inputArray[0];

    if (day === "Monday" || day === "Tuesday" || day === "Friday") {
        console.log(12);
    } else if (day === "Wednesday" || day === "Thursday") {
        console.log(14);
    } else {
        console.log(16);
    }
}


//cinemaTicket(["Sunday"]);