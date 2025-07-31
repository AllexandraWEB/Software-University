import { logout } from "./data/user.js";
import { page } from "./lib.js"
import { addRender } from "./utils/render.js";
import { updateNav } from "./utils/utils.js";
import { homeView } from "./views/home.js"
import { loginView } from "./views/login.js";

updateNav();

document.getElementById("logoutBtn").addEventListener("click", () => {
    logout();
    updateNav();
    page.redirect("/");
})

page(addRender);

//TODO Bind project URLs to view handlers
page("/", homeView);
page("/login", loginView);

page.start();