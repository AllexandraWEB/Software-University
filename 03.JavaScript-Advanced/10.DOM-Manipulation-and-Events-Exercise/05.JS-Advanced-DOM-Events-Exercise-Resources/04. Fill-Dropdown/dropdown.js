function addItem() {
    const menuRef = document.getElementById("menu");
    const newItemTextRef = document.getElementById("newItemText");
    const newItemValueRef = document.getElementById("newItemValue");

    const newItemText = newItemTextRef.value; // Takes the value of the input
    const newItemValue = newItemValueRef.value;

    if(!newItemText || !newItemValue) { // It prevents empty inputs to be added
        return;
    }

    newItemTextRef.value = ""; // Once the element is added, the input becomes empty
    newItemValueRef.value = ""; 

    const newElement = document.createElement("option"); // Create an option into the menu
    newElement.textContent = newItemText // The new element receives the text from the input
    newElement.value = newItemValue; // The new element receives the value of the input

    menuRef.appendChild(newElement); // Adds the new element into the menu
}