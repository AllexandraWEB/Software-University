import { html, render} from "./node_modules/lit-html/lit-html.js"

const form = document.querySelector("form");
const root = document.getElementById("root");

form.addEventListener("submit", onSubmit);

function onSubmit(e) {
    e.preventDefault();

    const formData = new FormData(e.target); // new FormData(e.target) creates a FormData object that reals all the inputs inside the form
    const data = formData.get("towns"); // Returns Plovdiv, Varna
    const towns = data.split(","); // Returns ['Plovdiv', ' Varna']
    const temp = createTemplate(towns);

    render(temp, root); // injects the rendered HTML into the DOM at the root element.
    // It means - “Insert this <ul>...</ul> into the element with id="root" on the page.”
}

function createTemplate(data) {
    return html`
    <ul>
    ${data.map(town => html`<li>${town}</li>`)}
    </ul>
    `
}