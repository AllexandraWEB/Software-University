import { getAllDrones } from "../data/drones.js";
import { html } from "../lib.js"
// Map over the droneCard Template if there are drones. If the section is empty, we need to show the h3
const catalogTemplate = (drones) => html` 
 <h3 class="heading">Marketplace</h3>
      <section id="dashboard">
      ${drones.length ? drones.map(droneCard) : html`<h3 class="no-drones">No Drones Available</h3>`} 
      </section>`
// Created droneCard Template based on a single drone template
const droneCard = (drone) => html` 
  <div class="drone">
          <img src=${drone.imageUrl} alt="example1" />
          <h3 class="model">${drone.model}</h3>
          <div class="drone-info">
            <p class="price">Price: €${drone.price}</p>
            <p class="condition">Condition: ${drone.condition}</p>
            <p class="weight">Weight: ${drone.weight}g</p>
          </div>
          <a class="details-btn" href="/catalog/${drone._id}">Details</a>
        </div>`

export async function catalogView(ctx) {
    const drones = await getAllDrones(); // Function imported from drones.js. It loads all drones
    ctx.render(catalogTemplate(drones)); // Enter an empty array when checking the h3 scenario
}