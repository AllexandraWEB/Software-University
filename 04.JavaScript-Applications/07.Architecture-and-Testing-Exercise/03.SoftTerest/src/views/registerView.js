import { userService } from "../api/userService.js";

const section = document.querySelector("div[data-section='register']");

let context = null;

export function showRegisterView(ctx) { // Handles the registerView
    ctx.main.replaceChildren(section); // Replaces the section to show registerView
    document.querySelector("form").addEventListener("submit", onSubmit);
    context = ctx;
}

async function onSubmit(e) {
    e.preventDefault();

    const formData = new FormData(e.target);
    const {email, password, repeatPassword} = Object.fromEntries(formData);

    if(email.length < 3 || password.length < 3 || password !== repeatPassword) {
        alert("The entries are incorrect");
        return;
    }

    await userService.register({email, password});
    e.target.reset();
    context.updateNav();
    context.goTo("/");
}