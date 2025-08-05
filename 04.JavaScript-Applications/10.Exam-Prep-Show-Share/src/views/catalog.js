import { getAllShows } from "../data/shows.js";
import { html } from "../lib.js"

const catalogTemplate = (shows) => html`
 <h2>Users Recommendations</h2>
        <section id="shows">
          ${shows.length ? shows.map(showCard) : html`<h2 id="no-show">No shows Added.</h2>`} 
        </section>`

const showCard = (show) => html` 
   <div class="show">
            <img src=${show.imageUrl} alt="example1" />
            <div class="show-info">
              <h3 class="title">${show.title}</h3>
              <p class="genre">Genre: ${show.genre}</p>
              <p class="country-of-origin">Country of Origin: ${show.country}</p>
              <a class="details-btn" href="/catalog/${show._id}">Details</a>
            </div>
          </div>`

export async function catalogView(ctx) {
    const shows = await getAllShows();
    ctx.render(catalogTemplate(shows));
}

