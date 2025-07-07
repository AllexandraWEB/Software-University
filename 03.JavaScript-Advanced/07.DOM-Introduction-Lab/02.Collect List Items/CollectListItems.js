function extractText() {
    // We get reference to the DOM element
    const inputItems = document.getElementById("items").children;
    const outputArea = document.getElementById("result");

    let result = [];
    
    for(let items of inputItems) {
        result.push(items.textContent);
    }

    outputArea.value = result.join("\n"); // .value because outputArea is textArea
}