import { searchByQuery } from "../data/motorcycles.js";
import { html, nothing } from "../lib.js"

const searchTemplate = (isSearch, items) => html`
    <section id="search">
        <div class="form">
          <h4>Search</h4>
          <form class="search-form" @submit=${onSubmit}>
            <input
              type="text"
              name="search"
              id="search-input"
            />
            <button class="button-list">Search</button>
          </form>
        </div>
        <h4 id="result-heading">Results:</h4>
          <div class="search-result">
           ${isSearch ? searchResultTemplate(items) : nothing}
          </div>
    </section>`

const searchResultTemplate = (items) => html`
${items?.length ? items.map(item => motorcycleTemplate(item)) : html`<h2 class="no-avaliable">No result.</h2>`}`

const motorcycleTemplate = (item) => html`
        <div class="motorcycle">
          <img src=${item.imageUrl} alt="example1" />
          <h3 class="model">${item.model}</h3>
            <a class="details-btn" href="/catalog/${item._id}">More Info</a>
        </div>`

let context = null;

export function searchView(ctx) {
    ctx.render(searchTemplate());
    context = ctx;
}

async function onSubmit(event) {
    event.preventDefault();

    const formData = new FormData(event.target);

    const query = formData.get("search");

    if (!query) {
        return;
    }

    const result = await searchByQuery(query);
    context.render(searchTemplate(true, result))
}