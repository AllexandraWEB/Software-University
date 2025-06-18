window.addEventListener("load", solve);

function solve() {
  const colorInput = document.getElementById("colors");
  const modelInput = document.getElementById("motorcycles");
  const dateAndTimeInput = document.getElementById("datetime");
  const fullNameInput = document.getElementById("full-name");
  const emailInput = document.getElementById("email");

  const testRideButton = document.getElementById("test-ride-btn");
  const previewUI = document.getElementById("preview-list");
  const completeUI = document.getElementById("complete-list");

  testRideButton.addEventListener("click", onClick);

  function onClick(e) {
    e.preventDefault();

    const color = colorInput.value;
    const model = modelInput.value;
    const dateAndTime = dateAndTimeInput.value;
    const fullName = fullNameInput.value.trim();
    const email = emailInput.value.trim();

    function clearedInputs() { // Stores Cleared Inputs
      colorInput.value = "";
      modelInput.value = "";
      dateAndTimeInput.value = "";
      fullNameInput.value = "";
      emailInput.value = "";
    }

    if(!color || !model || !dateAndTime || !fullName || !email) { // Early Return if the inputs are empty
        return;
    } 

    // Different early return 

    // if (
    //   colorInput.value == "" ||
    //   modelInput.value == "" ||
    //   fullNameInput.value == "" ||
    //   emailInput.value == "" ||
    //   dateAndTimeInput.value == ""
    // ) {
    //   return;
    // }

    const li = document.createElement("li");
    li.innerHTML = `
     <article>
        <p>Color: ${color}</p>
        <p>Model: ${model}</p>
        <p>For: ${fullName}</p>
        <p>Contact: ${email}</p>
        <p>Test Ride On: ${dateAndTime}</p>
     </article>
     <div class="btn-container">
        <button class="edit-btn">Edit</button>
        <button class="next-btn">Next</button>
     </div>
    `
    previewUI.appendChild(li);
    testRideButton.disabled = true; // The button should be disabled
    clearedInputs(); // Clears the inputs 

    const editButton = li.querySelector(".edit-btn");
    const nextButton = li.querySelector(".next-btn");

    editButton.addEventListener("click", () => { // Edit Button
        colorInput.value = color;
        modelInput.value = model;
        dateAndTimeInput.value = dateAndTime;
        fullNameInput.value = fullName;
        emailInput.value = email;

        li.remove();
        testRideButton.disabled = false;
    })

    nextButton.addEventListener("click", () => { // Next Button
        li.remove();

        const nextLi = document.createElement("li");
        nextLi.innerHTML = `
        <article>
          <p>Color: ${color}</p>
          <p>Model: ${model}</p>
          <p>For: ${fullName}</p>
          <p>Contact: ${email}</p>
          <p>Test Ride On: ${dateAndTime}</p>
          <button class="complete-btn">Complete</button>
        </article>
        `

        completeUI.appendChild(nextLi);

        const completeButton = document.querySelector(".complete-btn"); // Complete Button

        completeButton.addEventListener("click", () => {
            completeUI.innerHTML = "";

            const completedMessageButton = document.createElement("button"); 
            completedMessageButton.textContent = "Your Test is Confirmed";
            completedMessageButton.className = "confirm-btn";

            document.querySelector(".data-view").appendChild(completedMessageButton);

            completedMessageButton.addEventListener("click", () => { // After the "Complete" Button is clicked, the page reloads
                window.location.reload();
            })
        })
    })
  }
}
