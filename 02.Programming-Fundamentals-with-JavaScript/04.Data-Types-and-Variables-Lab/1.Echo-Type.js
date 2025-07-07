function echoType(inputType) {
    let type = typeof inputType; // Finding the type of the parameter

    console.log(type);

    if(type === "string" || type === "number"){
        console.log(inputType);
    } else {
   console.log("Parameter is not suitable for printing");
    }
}

// echoType("Hello, JavaScript");
// echoType(null);