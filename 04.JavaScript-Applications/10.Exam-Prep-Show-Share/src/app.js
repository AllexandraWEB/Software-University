import { page } from "./lib.js"
import { logout } from "./data/user.js";
import { addRender } from "./utils/render.js";
import { updateNav } from "./utils/utils.js";

import { homeView } from "./views/home.js"
import { loginView } from "./views/login.js";
import { registerView } from "./views/register.js";
import { catalogView } from "./views/catalog.js";
import { detailsView } from "./views/details.js";
import { createView } from "./views/create.js";
import { editView } from "./views/edit.js";
import { searchView } from "./views/search.js";

updateNav()

document.getElementById("logoutBtn").addEventListener("click", () => {
    logout();
    updateNav();
    page.redirect("/");
})

page(addRender);

//TODO Bind project URLs to view handlers
page("/", homeView);
page("/login", loginView);
page("/register", registerView);
page("/catalog", catalogView);
page("/create", createView);
page("/catalog/:id", detailsView);
page("/edit/:id", editView);
page("/search", searchView);

page.start();