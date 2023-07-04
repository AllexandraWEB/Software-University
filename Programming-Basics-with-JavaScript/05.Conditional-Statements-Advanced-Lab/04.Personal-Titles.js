function personalTitles(inputArray) {
    let age = Number(inputArray[0]);
    let gender = inputArray[1];

    if (gender === "m") {
        if (age >= 16) {
            console.log("Mr.");
        } else {
            console.log("Master");
        }
    } else {
        if (age >= 16) {
            console.log("Ms.");
        } else {
            console.log("Miss");
        }
    }
}


//personalTitles(["17", "m"]);
//personalTitles(["12", "f"]);

