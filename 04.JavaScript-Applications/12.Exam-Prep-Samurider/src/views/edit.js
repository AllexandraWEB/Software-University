import { createMotorcycle, getMotorcycleById, updateMotorcycle } from "../data/motorcycles.js";
import { html } from "../lib.js"

const editTemplate = (motorcycleData, onEdit) => html`
      <section id="edit">
            <h2>Edit Motorcycle</h2>
            <div class="form">
              <h2>Edit Motorcycle</h2>
              <form class="edit-form" @submit=${onEdit}>
                <input
                  type="text"
                  name="model"
                  id="model"
                  placeholder="Model"
                  .value=${motorcycleData.model}
                />
                <input
                  type="text"
                  name="imageUrl"
                  id="moto-image"
                  placeholder="Moto Image"
                  .value=${motorcycleData.imageUrl}
                />
                <input
                type="number"
                name="year"
                id="year"
                placeholder="Year"
                .value=${motorcycleData.year}
              />
              <input
              type="number"
              name="mileage"
              id="mileage"
              placeholder="mileage"
              .value=${motorcycleData.mileage}
            />
            <input
              type="number"
              name="contact"
              id="contact"
              placeholder="contact"
              .value=${motorcycleData.contact}
            />
              <textarea
                id="about"
                name="about"
                placeholder="about"
                rows="10"
                cols="50"
                .value=${motorcycleData.about}
              ></textarea>
                <button type="submit">Edit Motorcycle</button>
              </form>
          </div>
        </section>`

export async function editView(ctx) {
    const id = ctx.params.id;

    const motorcycleData = await getMotorcycleById(id);

    ctx.render(editTemplate(motorcycleData, onEdit));

    async function onEdit(event) {
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

            await updateMotorcycle(id, { model, imageUrl, year, mileage, contact, about });

            ctx.page.redirect("/catalog/" + id);
        } catch (error) {
            alert(error.message);
        }
    }
}