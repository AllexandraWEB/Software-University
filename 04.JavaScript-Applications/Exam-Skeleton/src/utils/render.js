import { render } from "../lib.js"

//TODO Use root element from project index. It could be div instead of main

const root = document.querySelector("main")

export function addRender(ctx, next) {
    ctx.render = (templateResult) => render(templateResult, root);

    next();
}