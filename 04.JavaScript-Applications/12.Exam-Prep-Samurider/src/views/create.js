import { createMotorcycle } from "../data/motorcycles.js";
import { html } from "../lib.js"

const createTemplate = (onCreate) => html`
       <section id="create">
          <h2>Add Motorcycle</h2>
          <div class="form">
            <h2>Add Motorcycle</h2>
            <form class="create-form" @submit=${onCreate}>
              <input
                type="text"
                name="model"
                id="model"
                placeholder="Model"
              />
              <input
                type="text"
                name="imageUrl"
                id="moto-image"
                placeholder="Moto Image"
              />
              <input
              type="number"
              name="year"
              id="year"
              placeholder="Year"
            />
            <input
            type="number"
            name="mileage"
            id="mileage"
            placeholder="mileage"
          />
          <input
            type="text"
            name="contact"
            id="contact"
            placeholder="contact"
          />
            <textarea
              id="about"
              name="about"
              placeholder="about"
              rows="10"
              cols="50"
            ></textarea>
              <button type="submit">Add Motorcycle</button>
            </form>
          </div>
        </section>`

export function createView(ctx) {
    ctx.render(createTemplate(onCreate));

    async function onCreate(event) {
        event.preventDefault();

        const formData = new FormData(event.currentTarget);
        const data = Object.fromEntries(formData.entries());

        const model = data.model;
        const imageUrl = data.imageUrl;
        const year = data.year;
        const mileage = data.mileage;
        const contact = data.contact;
        const about = data.about;

        try {
            if (!model || !imageUrl || !year || !mileage || !contact || !about) {
                throw new Error("All fields are required!");
            }

            await createMotorcycle(model, imageUrl, year, mileage, contact, about);

            ctx.page.redirect("/catalog");
        } catch (error) {
            alert(error.message);
        }
    }
}