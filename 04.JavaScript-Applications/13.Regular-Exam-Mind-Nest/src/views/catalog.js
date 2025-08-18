import { getAllTips } from "../data/tips.js";
import { html } from "../lib.js"

const catalogTemplate = (tips) => html`
      <h3 class="heading">Mindful Tips</h3>
      <section id="tips-dashboard">
         ${tips.length ? tips.map(tipCard) : html`<h3 class="empty">No Mindful Tips Added Yet.</h3>`}
      </section>`

const tipCard = (tip) => html`
        <div class="tip">
          <img src=${tip.imageUrl} alt="example1" />
          <h3 class="title">${tip.title}</h3>
          <div class="tip-info">
            <p class="type">Type: ${tip.type}</p>
            <p class="difficulty">Difficulty: ${tip.difficulty}</p>
          </div>
          <a class="details-btn" href="/catalog/${tip._id}">View Tip</a>
        </div>`

export async function catalogView(ctx) {
    const tips = await getAllTips();
    ctx.render(catalogTemplate(tips));
}