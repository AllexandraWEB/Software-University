 import { searchByQuery } from "../data/shows.js";
import { html, nothing } from "../lib.js"
 
 const searchTemplate = (isSearch, items) => html`
   <section id="search">
          <div class="form">
            <h2>Search</h2>
            <form class="search-form" @submit=${onSubmit}>
              <input
                type="text"
                name="search"
                id="search-input"
              />
              <button class="button-list">Search</button>
            </form>
          </div>
          <h4>Results:</h4>
          <div class="search-result">
            ${isSearch ? searchResultTemplate(items) : nothing}
         </div>
        </section>`

const searchResultTemplate = (items) => html`
${items?.length ? items.map(item => showTemplate(item)) : html`<p class="no-result">There is no TV show with this title</p>`}`

const showTemplate = (item) => html`
            <div class="show">
              <img src=${item.imageUrl} alt="example1" />
              <div class="show">
                <h3 class="title">${item.title}</h3>
                <p class="genre">Genre: ${item.genre}</p>
                <p class="country-of-origin">Country of Origin: ${item.country}</p>
                <a class="details-btn" href="/catalog/${item._id}">Details</a>
              </div>
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
    
    if(!query) {
        return;
    }

    const result = await searchByQuery(query);

    context.render(searchTemplate(true, result))
}
 
 