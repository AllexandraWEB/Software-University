import { dataService } from "../api/dataService.js";

const section = document.querySelector("div[data-section='dashboard']");

let context = null

export function showDashboardView(ctx) {
    context = ctx;
    ctx.main.replaceChildren(section);
    section.innerHTML = ""; // clear section
    loadAllIdeas();
}

async function loadAllIdeas() {
    const data = await dataService.getAll();

    section.innerHTML = ''; // Clear any residual content

    if (!data.length) {
        const h1 = document.createElement("h1");
        h1.textContent = "No ideas yet! Be the first one :)";
        section.appendChild(h1);
        return;
    }

    data.forEach(idea => {
        const div = renderIdea(idea);
        section.appendChild(div);
    });
}

function renderIdea(data) {
    const div = document.createElement("div");
    div.className = "card overflow-hidden current-card details";
    div.style.width = "20rem";
    div.style.height = "18rem";

    div.innerHTML = `
        <div class="card-body">
            <p class="card-text">${data.title}</p>
        </div>
        <img class="card-image" src="${data.img}" alt="Card image">
        <a class="btn" href="/details/${data._id}">Details</a>
    `;

    div.querySelector("a").addEventListener("click", (e) => {
        e.preventDefault();
        context.goTo("/details", data._id);
    });

    return div;
}
