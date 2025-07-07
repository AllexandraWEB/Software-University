function subtract() {
    const firstNumberRef = document.getElementById("firstNumber").value;
    const secondNumberRef = document.getElementById("secondNumber").value;
    const resultRef = document.getElementById("result"); // We take the reference to the DOM Element

    let firstNumber = Number(firstNumberRef);
    let secondNumber = Number(secondNumberRef);

    let result = firstNumber - secondNumber; // Subtract the second number from the first one
    resultRef.textContent = result;
}