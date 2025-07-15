const section = document.querySelector("div[data-section='home']");

export function showHomeView(ctx) {
    ctx.main.replaceChildren(section);

    section.querySelector("a").addEventListener("click", (e) => {
        e.preventDefault();
        ctx.goTo("/dashboard")
    })
}