import { dataService } from "../api/dataService.js";
import { userUtils } from "../utils/userUtils.js";

const section = document.querySelector("div[data-section='details']");
let context = null;

export async function showDetailsView(ctx, [id]) {
    context = ctx;
    const data = await dataService.getIdea(id);

    section.innerHTML = `
        <img class="det-img" src="${data.img}" />
        <div class="desc">
            <h2 class="display-5">${data.title}</h2>
            <p class="idea-description">${data.description}</p>
        </div>
    `;

    const isOwner = userUtils.isOwner(data._ownerId);
    if (isOwner) {
        const deleteBtn = document.createElement("a");
        deleteBtn.href = "javascript:void(0)";
        deleteBtn.className = "btn";
        deleteBtn.textContent = "Delete";
        deleteBtn.addEventListener("click", () => onDelete(data._id));
        section.appendChild(deleteBtn);
    }

    ctx.main.replaceChildren(section);
}

async function onDelete(id) {
    const choice = confirm("Are you sure?");
    if (!choice) return;

    await dataService.deleteIdea(id);
    context.goTo("/dashboard");
}