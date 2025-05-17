// Write a program that extracts all words from a passed-in string and converts them to upper case. 
// The extracted words in the upper case must be printed on a single line separated by ", ".

function wordsUppercase(inputString) {
    let wordArr = inputString.split(/[\W]/);
    let resultArr = wordArr.filter(x => x !== "");

    let finalResult = resultArr.join(", ").toUpperCase();

    console.log(finalResult);
    
}

wordsUppercase('Hi, how are you?');