import { html, nothing } from "../lib.js"
import { deleteSolutionById, getSolutionById } from "../data/solutions.js";
import { getUserData } from "../utils/utils.js";

const detailsTemplate = (solution, isOwner, onDelete) => html`
       <section id="details">
          <div id="details-wrapper">
            <img
              id="details-img"
              src=${solution.imageUrl}
              alt="example1"
            />
            <div>
              <p id="details-type">${solution.type}</p>
              <div id="info-wrapper">
                <div id="details-description">
                  <p id="description">
                   ${solution.description}
                  </p>
                  <p id="more-info">
                   ${solution.learnMore}
                  </p>
                </div>
              </div>
              <h3>Like Solution:<span id="like">0</span></h3>

              <div id="action-buttons">
                ${isOwner ? html`<a href="/edit/${solution._id}" id="edit-btn">Edit</a>
                <a href="javascript:void(0)" id="delete-btn" @click=${onDelete}>Delete</a>` : nothing}
               
                <!--Bonus - Only for logged-in users ( not authors )-->
                ${!isOwner ? html`<a href="#" id="like-btn">Like</a>` : nothing}
              </div>
            </div>
          </div>
        </section>`

export async function detailsView(ctx) {
    const id = ctx.params.id;
    const solution = await getSolutionById(id);

    const userData = getUserData();
    const isOwner = userData && solution._ownerId == userData.id;

    ctx.render(detailsTemplate(solution, isOwner, onDelete));

     async function onDelete() {
        const choice = confirm(`Are you sure you want to delete the offer for ${solution.type}?`);

        if (choice) { 
            await deleteSolutionById(solution._id);

            ctx.page.redirect("/catalog")
        }
    }

    
}