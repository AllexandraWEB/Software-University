import { deleteDrone, getDroneById } from "../data/drones.js";
import { html, nothing } from "../lib.js"
import { getUserData } from "../utils/utils.js";

const detailsTemplate = (drone, isOwner, onDelete) => html`
 <section id="details">
        <div id="details-wrapper">
          <div>
            <img id="details-img" src=${drone.imageUrl} alt="example1" />
            <p id="details-model">${drone.model}</p>
          </div>
          <div id="info-wrapper">
            <div id="details-description">
              <p class="details-price">Price: €${drone.price}</p>
              <p class="details-condition">Condition: ${drone.condition}</p>
              <p class="details-weight">Weight: ${drone.weight}g</p>
              <p class="drone-description">${drone.description}</p>
              <p class="phone-number">Phone: ${drone.phone}</p>
            </div>

            ${isOwner ? html`<div class="buttons"> 
              <a href="/edit/${drone._id}" id="edit-btn">Edit</a>
              <a href="javascript:void(0)" id="delete-btn" @click=${onDelete}>Delete</a>
            </div>` : nothing}
            
          </div>
        </div>
      </section>`

export async function detailsView(ctx) {
    const id = ctx.params.id; // Takes the needed Id
    const drone = await getDroneById(id); // Finds the droneById

    const userData = getUserData(); // Takes the userData
    const isOwner = userData && drone._ownerId == userData.id; // If there is userData and the _ownerId is the same, this means this is the owner

    ctx.render(detailsTemplate(drone, isOwner, onDelete));

    async function onDelete() {
        const choice = confirm(`Are you sure you want to delete the offer for ${drone.model}?`);

        if (choice) { // If the choice is true
            await deleteDrone(drone._id); // Imported function from drones.js

            ctx.page.redirect("/catalog")
        }
    }
}