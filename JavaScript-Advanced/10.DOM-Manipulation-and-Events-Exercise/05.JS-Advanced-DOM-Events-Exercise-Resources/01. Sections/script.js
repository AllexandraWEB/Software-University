function create(words) {
   const contentRef = document.getElementById("content");

   for (let sectionText of words) { // Loops through each string

      const createdDiv = document.createElement("div"); // Create the div
      const createdParagraph = document.createElement("p"); // Create the paragraph

      createdParagraph.textContent = sectionText;
      createdParagraph.style.display = "none"; // Hides the paragraph at the start

      createdDiv.appendChild(createdParagraph);

      createdDiv.addEventListener("click", () => {
         createdParagraph.style.display = createdParagraph.style.display === "block" ? "none" : "block"; // Change the visibility based on the current state
      })

      contentRef.appendChild(createdDiv);
   }
}

// Second solution

// function create(words) {
//    const contentRef = document.getElementById("content");

//    for(let i = 0; i < words.length; i++) {
//       const word = words[i];

//       const createDiv = document.createElement("div");
//       const createdParagraph = document.createElement("p");

//       createdParagraph.textContent = word;
//       createdParagraph.style.display = "none";

//       createDiv.appendChild(createdParagraph);
//       createDiv.addEventListener("click", toggleClick);

//       contentRef.appendChild(createDiv);
//    }

//    function toggleClick(event) {
//       const currentTarget = event.currentTarget;
//       const children = currentTarget.children;
//       const createdParagraph = children[0];
//       const visibleState = createdParagraph.style.display;

//       createdParagraph.style.display = visibleState === "none" ? "block" : "none";
//    }
// }