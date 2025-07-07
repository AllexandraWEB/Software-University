function concatenateData(input) {
    //име, фамилия, възраст и град.
    let firstName = input[0];
    let lastName = input[1];
    let age = input[2];
    let town = input[3];

    let result = `You are ${firstName} ${lastName}, a ${age}-years old person from ${town}.`;
    console.log(result);
}


//concatenateData(["Stoyan", "Kornov", 23, "Plovdiv"])