import { showDetailsView } from './details.js';
import { navigate, showView } from './utils.js';

const section = document.getElementById('catalog-view');

export function showCatalogView() { // Handles the catalog view (list of recipes).
    showView(section);

    loadRecipes();
}

async function loadRecipes() { // Loads recipes from the backend and displays them.
    const loader = document.createElement('p');
    loader.textContent = 'Loading...';
    loader.style.color = 'white';
    section.replaceChildren(loader);

    const url = 'http://localhost:3030/data/recipes?select=_id%2Cname%2Cimg';

    const res = await fetch(url);
    const data = await res.json();

    showRecipes(data);
}

function showRecipes(recipes) {
    section.replaceChildren(...recipes.map(createRecipePreview));
}

function createRecipePreview(record) {
    const element = document.createElement('article');
    element.className = 'preview';

    element.innerHTML = `
    <div class="title">
        <h2>${record.name}</h2>
    </div>
    <div class="small">
        <img src="${record.img}">
    </div>`;

    element.addEventListener('click', (e) => navigate(e, showDetailsView.bind(null, record._id))); // Each recipe preview is clickable and navigates to the details view.

    return element;
}
