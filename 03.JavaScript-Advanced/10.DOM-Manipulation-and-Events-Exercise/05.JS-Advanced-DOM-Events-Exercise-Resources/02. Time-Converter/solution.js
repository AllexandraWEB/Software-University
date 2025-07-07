function attachEventsListeners() {
    const buttonInput = document.querySelectorAll("input[type='button']"); // This selects all the buttons

    buttonInput.forEach(button => button.addEventListener("click", onClick)); // Each button gets an event listener and calls the onClick function

    function onClick(event) {
        const currentInput = event.currentTarget.parentElement.children[1]; // parentElement: gets the <div> that holds the label, input, and button and [1] gets the input

        const currentValue = Number(currentInput.value); // We take the number inside the input in order to pass it to the function calculateNewNumber()
        const currentUnit = currentInput.id; // We take the id of the input field in order to use it in the switch

        switch(currentUnit) {
            case "days": calculateNewNumber(currentValue); break;
            case "hours": calculateNewNumber(currentValue / 24); break;
            case "minutes": calculateNewNumber(currentValue / 24 / 60); break;
            case "seconds": calculateNewNumber(currentValue / 24 / 60 / 60); break;
        }
    }

    function calculateNewNumber(days) {
        const inputNumber = document.querySelectorAll("input[type='text']");

        inputNumber[0].value = days;
        inputNumber[1].value = days * 24;
        inputNumber[2].value = days * 24 * 60;
        inputNumber[3].value = days * 24 * 60 * 60;
    }
}