import { deleteShowById, getShowById } from "../data/shows.js";
import { html, nothing } from "../lib.js"
import { getUserData } from "../utils/utils.js";

const detailsTemplate = (show, isOwner, onDelete) => html`
  <section id="details">
          <div id="details-wrapper">
            <img id="details-img" src=${show.imageUrl} alt="example1" />
            <div id="details-text">
              <p id="details-title">${show.title}</p>
              <div id="info-wrapper">
                <div id="description">
                  <p id="details-description">
                    ${show.details}
                  </p>
                </div>
              </div>
          
              ${isOwner ? html`<div id="action-buttons">
                <a href="/edit/${show._id}" id="edit-btn">Edit</a>
                <a href="javascript:void(0)" id="delete-btn" @click=${onDelete}>Delete</a>
              </div>` : nothing}
             
            </div>
          </div>
        </section>`

export async function detailsView(ctx) {
    const id = ctx.params.id;
    const show = await getShowById(id);

    const userData = getUserData();
    const isOwner = userData && show._ownerId == userData.id;

    ctx.render(detailsTemplate(show, isOwner, onDelete));

    async function onDelete() {
        const choice = confirm(`Are you sure you want to delete the offer for ${show.title}?`);

        if (choice) { // If the choice is true
            await deleteShowById(show._id); // Imported function from drones.js

            ctx.page.redirect("/catalog")
        }
    }
}