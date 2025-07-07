// Error Handling - If the request is not successful, or the information is not in the expected format, display "Error" as stopName and nothing in the list.

// stopId: {
// name: stopName,
// buses: { busId: time, }
// }

// The service will respond with valid data to IDs 1287, 1308, 1327 and 2334.

async function getInfo() {
    const inputRef = document.getElementById("stopId");
    const stopNameRef = document.getElementById("stopName");
    const busInfoRef = document.getElementById("buses");
    
    const stopId = inputRef.value; // Takes the value from the input field

    const url = `http://localhost:3030/jsonstore/bus/businfo/${stopId}`

    if (!stopId) { // Early return if the input field is empty
        return;
    }

    inputRef.value = ""; // Empties the input field after the button is clicked
    busInfoRef.textContent = ""; // Empties the existing content in the <ul>

    try {
        const response = await fetch(url) // Sends an HTTP GET request to the server using the fetch() API and waits for the server’s response

        if (!response.ok) { // Check if HTTP response is not OK (e.g., 404, 500)
            stopNameRef.textContent = "Error";
        }

        const data = await response.json(); // Parses the response body from JSON format into a JavaScript object

        stopNameRef.textContent = data.name;
        Object.entries(data.buses).forEach(bus => { // Loops through each key-value pair in the buses object - { "17": 6, "42": 3 } becomes [["17", 6], ["42", 3]]
            const li = document.createElement("li");
            li.textContent = `Bus ${bus[0]} arrives in ${bus[1]} minutes`;
            busInfoRef.appendChild(li);
        });
    } catch {
        stopNameRef.textContent = "Error";
    }
}