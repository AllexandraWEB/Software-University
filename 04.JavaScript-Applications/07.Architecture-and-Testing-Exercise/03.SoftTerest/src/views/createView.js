import { dataService } from "../api/dataService.js";

const section = document.querySelector("div[data-section='create']");

let context = null;
let form = section.querySelector("form");

export async function showCreateView(ctx) {
    context = ctx;
    ctx.main.replaceChildren(section);

    // Remove existing listener first to avoid duplicates
    form.removeEventListener("submit", onSubmit);
    form.addEventListener("submit", onSubmit);
}

async function onSubmit(e) {
    e.preventDefault();

    const formData = new FormData(e.target);

    const {title, description, imageURL} = Object.fromEntries(formData);

    if(title.length < 6 || description.length < 10 || imageURL.length < 5) {
        alert("error");
        return;
    }

    await dataService.createIdea({title, description, img: imageURL});
    e.target.reset();
    context.goTo("/dashboard");
}