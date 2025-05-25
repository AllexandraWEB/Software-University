// The input comes as two parameters – an array of strings and a string. The second parameter is the delimiter.

function printAnArray(inputArray, delimiter) {
    console.log(inputArray.join(delimiter));
}

printAnArray(["One", "Two", "Three", "Four", "Five"], "-");
