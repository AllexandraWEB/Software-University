import { createShow } from "../data/shows.js";
import { html } from "../lib.js"

const createTemplate = (onCreate) => html`
  <section id="create">
          <div class="form">
            <h2>Add Show</h2>
            <form class="create-form" @submit=${onCreate}>
              <input
              type="text"
              name="title"
              id="title"
              placeholder="TV Show title"
            />
            <input
              type="text"
              name="image-url"
              id="image-url"
              placeholder="Image URL"
            />
            <input
            type="text"
            name="genre"
            id="genre"
            placeholder="Genre"
          />
          <input
          type="text"
          name="country"
          id="country"
          placeholder="Country"
        />
            <textarea
              id="details"
              name="details"
              placeholder="Details"
              rows="2"
              cols="10"
            ></textarea>
              <button type="submit">Add Show</button>
            </form>
          </div>
        </section>`

export function createView(ctx) {
    ctx.render(createTemplate(onCreate));

    async function onCreate(event) {
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

            await createShow(title, imageUrl, genre, country, details);

            ctx.page.redirect("/catalog");
        } catch (error) {
            alert(error.message);
        }
    }
}