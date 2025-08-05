import { getShowById, updateShow } from "../data/shows.js";
import { html } from "../lib.js"

const editTemplate = (showData, onEdit) => html`
<section id="edit">
          <div class="form">
            <h2>Edit Show</h2>
            <form class="edit-form" @submit=${onEdit}>
              <input
                type="text"
                name="title"
                id="title"
                placeholder="TV Show title"
                .value=${showData.title}
              />
              <input
                type="text"
                name="image-url"
                id="image-url"
                placeholder="Image URL"
                .value=${showData.imageUrl}
              />
              <input
              type="text"
              name="genre"
              id="genre"
              placeholder="Genre"
              .value=${showData.genre}
            />
            <input
            type="text"
            name="country"
            id="country"
            placeholder="Country"
            .value=${showData.country}
          />
              <textarea
                id="details"
                name="details"
                placeholder="Details"
                rows="2"
                cols="10"
                .value=${showData.details}
              ></textarea>
              <button type="submit">Edit Show</button>
            </form>
          </div>
        </section>
 `

export async function editView(ctx) {
    const id = ctx.params.id;

    const showData = await getShowById(id);

    ctx.render(editTemplate(showData, onEdit));

    async function onEdit(event) {
        event.preventDefault();

        const formData = new FormData(event.currentTarget);
        const data = Object.fromEntries(formData.entries());

        const title = data.title;
        const imageUrl = data["image-url"];
        const genre = data.genre;
        const country = data.country;
        const details = data.details;

        try {
            if (!title || !imageUrl || !genre || !country || !details) {
                throw new Error("All fields are required!");
            }

            await updateShow(id, {title, imageUrl, genre, country, details});

            ctx.page.redirect("/catalog/" + id);
        } catch (error) {
            alert(error.message);
        }
    }
}