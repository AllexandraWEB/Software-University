function attachEvents() {
    const URL = "http://localhost:3030/jsonstore/phonebook";

    const ulRef = document.getElementById("phonebook");

    document.getElementById("btnLoad").addEventListener("click", onLoad);
    document.getElementById("btnCreate").addEventListener("click", onCreate);

    async function onLoad() {
        try {
            const response = await fetch(URL);

            if (response.status !== 200) {
                throw new Error(`Error: ${response.status}`);
            }

            const data = await response.json();
            ulRef.innerHTML = "";
            Object.values(data).forEach(rec => createElement(rec));
        } catch (error) {
            console.error("Failed to load messages:", error);
        }
    }

    async function onCreate(e) {
        const personNameInput = document.getElementById("person");
        const phoneNumberInput = document.getElementById("phone");

        const personName = personNameInput.value;
        const phoneNumber = phoneNumberInput.value;

        if (!personName || !phoneNumber) { // Early return if any input fiels is empty
            return;
        }

        personNameInput.value = "";
        phoneNumberInput.value = "";

        const data = {
            person: personName,
            phone: phoneNumber
        }

        const option = {
            method: "POST",
            headers: {
                "Content-type": "application/json"
            },
            body: JSON.stringify(data)
        }

        await fetch(URL, option);
        onLoad();
    }

    async function onDelete(e) {
        const id = e.target.parentElement.dataset.id;

        await fetch(URL + `/${id}`, { method: "DELETE" });
        onLoad();
    }

    function createElement(data) {
        const li = document.createElement("li");
        li.textContent = `${data.person}: ${data.phone}`;
        li.dataset.id = data._id;

        const btn = document.createElement("button");
        btn.textContent = "Delete";
        li.appendChild(btn);
        ulRef.appendChild(li);

        btn.addEventListener("click", onDelete);
    }
}

attachEvents();