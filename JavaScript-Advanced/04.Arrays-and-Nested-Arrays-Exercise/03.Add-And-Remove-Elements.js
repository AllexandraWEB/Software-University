function addAndRemoveElements(inputArray) {
    number = 1;
    finalResult = [];

    for(let i = 0; i < inputArray.length; i++) {
        let command = inputArray[i];

        if(command === "add") {
            finalResult.push(number);
        } else if(command === "remove") {
            finalResult.pop();
        }
        number++;
    }

    if(finalResult.length === 0) {
        console.log("Empty");
    } else {
        for (let el of finalResult) {
            console.log(el);
        }
    }
}

addAndRemoveElements(["add", "add", "add", "add"]);
addAndRemoveElements(['add', 'add', 'remove', 'add', 'add']);
