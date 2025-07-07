window.addEventListener("load", solve);

function solve() {
  const snowmanNameInput = document.getElementById("snowman-name");
  const snowmanHeightInput = document.getElementById("snowman-height");
  const snowmanLocationInput = document.getElementById("location");
  const creatorCreatorInput = document.getElementById("creator-name");
  const specialAttributeInput = document.getElementById("special-attribute");

  const addButton = document.querySelector(".add-btn");
  const snowmanPreviewUI = document.querySelector(".snowman-preview");
  const snowmanShowListUI = document.querySelector(".snow-list");

  addButton.addEventListener("click", onClick);

  function onClick(e) {
    e.preventDefault();

    const snowmanName = snowmanNameInput.value.trim();
    const snowmanHeight = snowmanHeightInput.value;
    const snowmanLocation = snowmanLocationInput.value.trim();
    const snowmanCreator = creatorCreatorInput.value.trim();
    const specialAttribute = specialAttributeInput.value;

    function clearedInputs() {
        snowmanNameInput.value = "";
        snowmanHeightInput.value = "";
        snowmanLocationInput.value = "";
        creatorCreatorInput.value = "";
        specialAttributeInput.value = "";
    }

    if(!snowmanName || !snowmanHeight || !snowmanLocation || !snowmanCreator || !specialAttribute) {
      return;
    } 

    const li = document.createElement("li");
    li.className = "snowman-info";

    li.innerHTML = `
       <article>
          <p>Name: ${snowmanName}</p>
          <p>Height: ${snowmanHeight}</p>
          <p>Location: ${snowmanLocation}</p>
          <p>Creator: ${snowmanCreator}</p>
          <p>Attribute: ${specialAttribute}</p>
      </article>
      <div class="btn-container">
          <button class="edit-btn">Edit</button>
          <button class="next-btn">Next</button>
      </div>
    `

    snowmanPreviewUI.appendChild(li);
    addButton.disabled = true;
    clearedInputs();

    const editButton = document.querySelector(".edit-btn");
    const nextButton = document.querySelector(".next-btn");

      editButton.addEventListener("click", () => { // Edit Button
        snowmanNameInput.value = snowmanName;
        snowmanHeightInput.value = snowmanHeight;
        snowmanLocationInput.value = snowmanLocation;
        creatorCreatorInput.value = snowmanCreator;
        specialAttributeInput.value = specialAttribute;

        li.remove();
        addButton.disabled = false;
        })

      nextButton.addEventListener("click", () => {
        li.remove();

        const nextLi = document.createElement("li");
        nextLi.className = "snowman-content";

        nextLi.innerHTML = `
          <article>
              <p>Name: ${snowmanName}</p>
              <p>Height: ${snowmanHeight}</p>
              <p>Location: ${snowmanLocation}</p>
              <p>Creator: ${snowmanCreator}</p>
              <p>Attribute: ${specialAttribute}</p>
              <button class="send-btn">Send</button>
          </article>
        `

        snowmanShowListUI.appendChild(nextLi);

        const sendButton = document.querySelector(".send-btn");

        sendButton.addEventListener("click", () => {
            const mainElement = document.getElementById("hero");

            const backButton = document.createElement("button");
            backButton.textContent = "Back";
            backButton.className = "back-btn"

            mainElement.remove();
            document.getElementById("back-img").hidden = false;
            document.querySelector(".body").appendChild(backButton);

            backButton.addEventListener("click", () => { 
                window.location.reload();
            })
        })
      })
  }
}
