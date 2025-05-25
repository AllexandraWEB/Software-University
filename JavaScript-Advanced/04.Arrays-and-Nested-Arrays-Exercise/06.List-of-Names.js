// You will receive an array of names.
// Sort them alphabetically in ascending order and print a numbered list of all the names, each on a new line.

function listOfNames(inputArray) {
    let sortedNames = inputArray.sort((a, b) => a.localeCompare(b)); // Sorting alphabetically in ascending order

    for(let i = 0; i < sortedNames.length; i++) {
        console.log(`${i + 1}.${sortedNames[i]}`);
    }
}

listOfNames(["John", "Bob", "Christina", "Ema"]);
