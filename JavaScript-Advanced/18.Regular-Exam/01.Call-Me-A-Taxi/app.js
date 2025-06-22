window.addEventListener('load', solve);

function solve() {
    const pickUpInput = document.getElementById("pick-up-location");
    const dropOffInput = document.getElementById("drop-off-location");
    const numbersOfPassangersInput = document.getElementById("number-of-passengers");
    const dateAndTimeInput = document.getElementById("date-time");
    const typeOfTaxiInput = document.getElementById("taxi-type");

    const orderButton = document.getElementById("order-btn");
    const orderInfoListUI = document.querySelector(".order-info-list");
    const confirmOrderUI = document.querySelector(".confirm-order-list");

    orderButton.addEventListener("click", onClick);

    function onClick(e) {
        e.preventDefault();

        const pickUp = pickUpInput.value.trim();
        const dropOff = dropOffInput.value.trim();
        const numbersOfPassangers = numbersOfPassangersInput.value;
        const dateAndTime = dateAndTimeInput.value;
        const typeOfTaxi = typeOfTaxiInput.value;

        function clearedInputs() { // Stores Cleared Inputs
            pickUpInput.value = "";
            dropOffInput.value = "";
            numbersOfPassangersInput.value = "";
            dateAndTimeInput.value = "";
            typeOfTaxiInput.value = "";
        }

        if(!pickUp || !dropOff || !numbersOfPassangers || !dateAndTime || !typeOfTaxi) { // Early return
            return;
        }

        const li = document.createElement("li");
        li.className = "order-content"
        li.innerHTML = `
        <article>
            <h3>Pick From: ${pickUp}</h3>
            <h3>Drop-Off: ${dropOff}</h3>
            <p>Passengers: ${numbersOfPassangers}</p>
            <p>Time: ${dateAndTime}</p>
            <p>Type: ${typeOfTaxi}</p>
        </article>
        <div class="btn-wrapper">
            <button class="edit-btn">Edit</button>
            <button class="continue-btn">Continue</button>
        </div>
        `

        orderInfoListUI.appendChild(li);
        clearedInputs();
        orderButton.disabled = true;

        const editButton = li.querySelector(".edit-btn");
        const continueButton = li.querySelector(".continue-btn");

        editButton.addEventListener("click", () => {
            pickUpInput.value = pickUp;
            dropOffInput.value = dropOff;
            numbersOfPassangersInput.value = numbersOfPassangers;
            dateAndTimeInput.value = dateAndTime;
            typeOfTaxiInput.value = typeOfTaxi;

            li.remove();
            orderButton.disabled = false;
        });

        continueButton.addEventListener("click", () => {
            li.remove(); 

            const continueLi = document.createElement("li");
            continueLi.className = "order-content";

            continueLi.innerHTML = `
                <article>
                    <h3>Pick From: ${pickUp}</h3>
                    <h3>Drop-Off: ${dropOff}</h3>
                    <p>Passengers: ${numbersOfPassangers}</p>
                    <p>Time: ${dateAndTime}</p>
                    <p>Type: ${typeOfTaxi}</p>
                </article>
                <div class="btn-wrapper">
                    <button class="cancel-btn">Cancel</button>
                    <button class="confirm-btn">Confirm</button>
                </div>
            `

            confirmOrderUI.appendChild(continueLi);

            const cancelButton = document.querySelector(".cancel-btn");
            const confirmButton = document.querySelector(".confirm-btn");

            cancelButton.addEventListener("click", () => {
                const cancelHeading = document.getElementById("status");

                continueLi.remove();
                orderButton.disabled = false;

                cancelHeading.className = "taxi-not-complete";
                cancelHeading.textContent = "Taxi request was not completed."

                cancelHeading.addEventListener("click", () => {
                    window.location.reload();
                })
            });

            confirmButton.addEventListener("click", () => {
                const confirmHeading = document.getElementById("status");

                continueLi.remove();
                orderButton.disabled = false;

                confirmHeading.className = "taxi-ordered";
                confirmHeading.textContent = "Taxi has been successfully ordered."

                confirmHeading.addEventListener("click", () => {
                    window.location.reload();
                })
            });
        })
    }
}



    
    
