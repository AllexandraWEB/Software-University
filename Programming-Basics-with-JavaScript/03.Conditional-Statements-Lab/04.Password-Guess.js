function guessThePassword(inputArray) {
    let password = inputArray[0];

    if (password === "s3cr3t!P@ssw0rd") {
        console.log("Welcome");
    } else {
        console.log("Wrong password!")
    }
}

guessThePassword(["s3cr3t!P@ssw0rd"]);
guessThePassword(["qwerty"]);