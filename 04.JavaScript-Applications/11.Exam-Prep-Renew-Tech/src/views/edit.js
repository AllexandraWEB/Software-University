import { getSolutionById, updateSolution } from "../data/solutions.js";
import { html } from "../lib.js"

const editTemplate = (showData, onEdit) => html`
         <section id="edit">
          <div class="form">
            <img class="border" src="./images/border.png" alt="" />
            <h2>Edit Solution</h2>
            <form class="edit-form" @submit=${onEdit}>
              <input
                type="text"
                name="type"
                id="type"
                placeholder="Solution Type"
                .value=${showData.type}
              />
              <input
                type="text"
                name="image-url"
                id="image-url"
                placeholder="Image URL"
                .value=${showData.imageUrl}
              />
              <textarea
                id="description"
                name="description"
                placeholder="Description"
                rows="2"
                cols="10"
                .value=${showData.description}
              ></textarea>
              <textarea
                id="more-info"
                name="more-info"
                placeholder="more Info"
                rows="2"
                cols="10"
                .value=${showData.learnMore}
              ></textarea>
              <button type="submit">Edit</button>
            </form>
          </div>
        </section>`

export async function editView(ctx) {
    const id = ctx.params.id;
    const showData = await getSolutionById(id);

    ctx.render(editTemplate(showData, onEdit));

     async function onEdit(event) {
        event.preventDefault();

        const formData = new FormData(event.currentTarget);
        const data = Object.fromEntries(formData.entries());

        const type = data.type;
        const imageUrl = data["image-url"];
        const description = data.description;
        const learnMore = data["more-info"];

        try {
            if (!type || !imageUrl || !description || !learnMore) {
                throw new Error("All fields are required!");
            }

            await updateSolution(id, { type, imageUrl, description, learnMore });

            ctx.page.redirect("/catalog/" + id);
        } catch (error) {
            alert(error.message);
        }
    }
}