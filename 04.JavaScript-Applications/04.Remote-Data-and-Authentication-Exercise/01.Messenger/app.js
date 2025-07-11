function attachEvents() {
    const URL = "http://localhost:3030/jsonstore/messenger";

    const textAreaRef = document.getElementById("messages");

    document.getElementById("submit").addEventListener("click", onSubmit);
    document.getElementById("refresh").addEventListener("click", onLoad);

    async function onLoad(e) {
        try {
            const response = await fetch(URL);

            if (!response.ok) {
                throw new Error(`Error: ${response.status}`);
            }

            const data = await response.json();

            let buff = "";

            Object.values(data).forEach(rec => {
                buff += `${rec.author}: ${rec.content}\n`;
            });

            textAreaRef.value = buff.trim();
        } catch (error) {
            console.error("Failed to load messages:", error);
            textAreaRef.value = "Error loading messages.";
        }
    }

    async function onSubmit(e) {
        const inputNameRef = document.querySelector("input[name='author']");
        const inputMessageRef = document.querySelector("input[name='content']");

        const inputName = inputNameRef.value;
        const inputMessage = inputMessageRef.value;

        if (!inputName || !inputMessage) {
            return;
        }

        const data = {
            author: inputName,
            content: inputMessage
        };

        const option = {
            method: "POST",
            headers: {
                "Content-type": "application/json"
            },
            body: JSON.stringify(data)
        };

        try {
            const response = await fetch(URL, option);

            if (!response.ok) {
                throw new Error(`Error: ${response.status}`);
            }

            inputNameRef.value = "";
            inputMessageRef.value = "";
        } catch (error) {
            console.error("Failed to send message:", error);
            alert("Error sending message. Please try again.");
        }
    }
}

attachEvents();