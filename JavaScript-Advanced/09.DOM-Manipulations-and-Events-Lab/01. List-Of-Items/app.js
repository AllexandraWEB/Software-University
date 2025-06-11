function addItem() {
    const inputField = document.getElementById("newItemText"); // We take the DOM reference

    let inputFieldValue = inputField.value // Get the input value
    let newElement = document.createElement("li"); // Create new <li> element

    newElement.textContent = inputFieldValue; // Assign the input value

    let list = document.getElementById("items");
    list.appendChild(newElement) // Append a new child into the <ul>

    inputField.value = ""; // After the new element is added, the input field is being cleaned up
}