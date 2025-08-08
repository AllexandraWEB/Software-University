import { deleteMotorcycleById, getMotorcycleById } from "../data/motorcycles.js";
import { html, nothing } from "../lib.js"
import { getUserData } from "../utils/utils.js";

const detailsTemplate = (motorcycle, isOwner, onDelete) => html`
        <section id="details">
          <div id="details-wrapper">
            <img id="details-img" src=${motorcycle.imageUrl} alt="example1" />
            <p id="details-title">${motorcycle.model}</p>
            <div id="info-wrapper">
              <div id="details-description">
                <p class="year">Year: ${motorcycle.year}</p>
                <p class="mileage">Mileage: ${motorcycle.mileage} km.</p>
                <p class="contact">Contact Number: ${motorcycle.contact}</p>
                   <p id = "motorcycle-description">
                    ${motorcycle.about}
                   </p>
              </div>
              ${isOwner ? html`<div id="action-buttons">
              <a href="/edit/${motorcycle._id}" id="edit-btn">Edit</a>
              <a href="javascript:void(0)" id="delete-btn" @click=${onDelete}>Delete</a>
              </div>` : nothing}
            </div>
          </div>
        </section>`

export async function detailsView(ctx) {
    const id = ctx.params.id;
    const motorcycle = await getMotorcycleById(id);

    const userData = getUserData();
    const isOwner = userData && motorcycle._ownerId == userData.id;

    ctx.render(detailsTemplate(motorcycle, isOwner, onDelete));

        async function onDelete() {
            const choice = confirm(`Are you sure you want to delete the offer for ${motorcycle.title}?`);

            if (choice) { 
                await deleteMotorcycleById(motorcycle._id);
                ctx.page.redirect("/catalog")
            }
        }
}