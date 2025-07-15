import { userService } from "../api/userService.js";

const section = document.querySelector("div[data-section='login']");

let context = null;

export function showLoginView(ctx) {
    context = ctx;
    context.main.replaceChildren(section);
    document.querySelector("form").addEventListener("submit", onSubmit);
}

async function onSubmit(e) {
    e.preventDefault();

    const formData = new FormData(e.target);
    const { email, password } = Object.fromEntries(formData);

    await userService.login({ email, password });
    e.target.reset();
    context.updateNav();
    context.goTo("/");
}