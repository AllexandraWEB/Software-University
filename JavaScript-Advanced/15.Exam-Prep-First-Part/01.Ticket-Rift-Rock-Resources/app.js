// 0.1 All fields (Number of Tickets, Seating Preference, Full Name, Email, and Phone Number) are filled with the correct input
// 0.2 Number of Tickets, Seating Preference, Full Name, Email, and Phone Number are non-empty strings. If any of them is empty, the program should not do anything.

// 1.1 Getting the information from the form
// 2.1 Edit Ticket Info
// 3.1 Next Button
// 4.1 Buy Button
// 5.1 Back Button

window.addEventListener("load", solve);

function solve() {
    const numsTicketsInput = document.getElementById("num-tickets");
    const seatingPreferenceInput = document.getElementById("seating-preference");
    const fullNameInput = document.getElementById("full-name");
    const emailInput = document.getElementById("email");
    const phoneNumberInput = document.getElementById("phone-number");

    const ticketPreviewUI = document.getElementById("ticket-preview");
    const ticketPurchaseUI = document.getElementById("ticket-purchase");
    const purchaseButton = document.getElementById("purchase-btn");

    purchaseButton.addEventListener("click", onPurchase);

    function onPurchase() { // 1.1 Function when the button "Purchase Tickets" is clicked
        // When the button is clicked, the information from the input is listed in <ul>
        const numsTickets = numsTicketsInput.value;
        const seatingPreference = seatingPreferenceInput.value;
        const fullName = fullNameInput.value.trim();
        const email = emailInput.value.trim();
        const phoneNumber = phoneNumberInput.value.trim();

        function clearedInputs() { // Function for cleared inputs
            numsTicketsInput.value = ""; 
            seatingPreferenceInput.value = "";
            fullNameInput.value = "";
            emailInput.value = "";
            phoneNumberInput.value = "";
        }

        if(!numsTickets || seatingPreference === "Seating Preference" || !fullName || !email || !phoneNumber) { // 0.2 Early return if the inputs are empty
            return;
        }

        const li = document.createElement("li"); // Creates <li> for the <ul>
        li.className = "ticket-purchase"; // Adds class to the <li>

        li.innerHTML = `
        <article>
            <p>Count: ${numsTickets}</p>
            <p>Preference: ${seatingPreference}</p>
            <p>To: ${fullName}</p>
            <p>Email: ${email}</p>
            <p>Phone Number: ${phoneNumber}</p>
        </article>
        <div class="btn-container">
            <button class="edit-btn">Edit</button>
            <button class="next-btn">Next</button>
        </div>
        `

        ticketPreviewUI.appendChild(li); // A list item is added to the "ticket-preview" unordered list
        purchaseButton.disabled = true; // The "Purchase Ticket" button is disabled
        clearedInputs(); // When the button is clicked, the input fields is cleared

        const editButton = document.querySelector(".edit-btn"); // Select the button by class
        const nextButton = document.querySelector(".next-btn");

        editButton.addEventListener("click", () => { // 2.1 When the "Edit" button is clicked, all of the information is loaded into the input fields back again
            numsTicketsInput.value = numsTickets;
            seatingPreferenceInput.value = seatingPreference;
            fullNameInput.value = fullName;
            emailInput.value = email;
            phoneNumberInput.value = phoneNumber;

            li.remove(); // The list item is removed
            purchaseButton.disabled = false; // 2.1 The button "Purchase Ticket" is enabled again
        })

        nextButton.addEventListener("click", () => { // 3.1 Remove everything inside the <ul> from the "ticket-preview" and add it to "ticket-purchase"
            ticketPreviewUI.innerHTML = ""; // Remove the <ul> from "ticket-preview"

            const purchaseLi = document.createElement("li"); // Create a new <li> for the <ul> in "ticket-purchase"
            purchaseLi.className = "ticket-purchase"; // Adds the class

            purchaseLi.innerHTML = `
            <article>
                <p>Count: ${numsTickets}</p>
                <p>Preference: ${seatingPreference}</p>
                <p>To: ${fullName}</p>
                <p>Email: ${email}</p>
                <p>Phone Number: ${phoneNumber}</p>
                <button class="buy-btn">Buy</button>
            </article>
            `

            ticketPurchaseUI.appendChild(purchaseLi); // Adds the new information into the parent

            const buyButton = document.querySelector(".buy-btn"); // Selecting the button from the template based on the class

            buyButton.addEventListener("click", () => { // 4.1 When the button is clicked, the "ticket-purchase" should be removed
                ticketPurchaseUI.innerHTML = ""; 

                const thankYouMessage = document.createElement("h2"); // Adds h2 title
                thankYouMessage.textContent = "Thank you for your purchase!" // Sets a value for the H2 

                const backButton = document.createElement("button"); // Creates a new button
                backButton.className = "back-btn"
                backButton.textContent = "Back";

                document.querySelector(".bottom-content").appendChild(thankYouMessage);
                document.querySelector(".bottom-content").appendChild(backButton);

                backButton.addEventListener("click", () => { // 5.1 When the button is clicked, H2 should be removed
                    thankYouMessage.remove();
                    backButton.remove();
                    purchaseButton.disabled = false; // The "Purchase Tickets" is enabled again
                })
            })
        })
    }
}
