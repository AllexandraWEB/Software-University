function calc() {
    // We get reference to the DOM element
    // The reference is pointing to the DOM element, not its value
    const firstNumRef = document.getElementById("num1"); // <input type="text" id="num1"> DOM Element
    const secondNumRef = document.getElementById("num2"); // <input type="text" id="num2"> DOM Element
    const sumOfNumsRef = document.getElementById("sum"); // <input type="text" id="sum" readonly="readonly">

    let firstNum = Number(firstNumRef.value); // Return a string of the value, with Number() we transform it
    let secondNum = Number(secondNumRef.value);
    let sumOfNums = firstNum + secondNum; 
    
    sumOfNumsRef.value = sumOfNums; // Set the .value of the element with ID sum to the value of the variable sumOfNums
}
