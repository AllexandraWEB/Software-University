import { userUtils } from "./userUtils.js";
import { showCreateView } from "../views/createView.js";
import { showDashboardView } from "../views/dashboardView.js";
import { showDetailsView } from "../views/detailsView.js";
import { showHomeView } from "../views/homeView.js"
import { showLoginView } from "../views/loginView.js";
import { showRegisterView } from "../views/registerView.js";
import { showLogoutView } from "../views/showLogoutView.js";

document.querySelector("nav").addEventListener("click", onNavigate);
const main = document.querySelector("main");

const routes = {
    "/": (ctx) => showHomeView(ctx),
    "/dashboard": (ctx) => showDashboardView(ctx),
    "/login": (ctx) => showLoginView(ctx),
    "/register": (ctx) => showRegisterView(ctx), // Calls the function showRegisterView, imported from registerView.js
    "/logout": (ctx) => showLogoutView(ctx),
    "/details": (ctx, params) => showDetailsView(ctx, params),
    "/create": (ctx) => showCreateView(ctx),
}

function updateNav() {
    const hasUser = userUtils.hasUser();

    if(hasUser) {
        document.querySelectorAll("a[data-nav='user']").forEach(a => a.style.display = "block")
        document.querySelectorAll("a[data-nav='guest']").forEach(a => a.style.display = "none")
    } else {
        document.querySelectorAll("a[data-nav='user']").forEach(a => a.style.display = "none")
        document.querySelectorAll("a[data-nav='guest']").forEach(a => a.style.display = "block")
    }
}

function onNavigate(e) {
    e.preventDefault();
    let target = e.target;

    if (target.tagName === "IMG") { // If the target is an img, the target becomes the parent element
        target = target.parentElement;
    }

    if (target.tagName !== "A") { // If the target is not an ancor
        return;
    }

    if (!target.href) { // If the target does not have href
        return;
    }

    const url = new URL(target.href);
    const viewName = url.pathname;

    goTo(viewName);
}

const ctx = {
    main,
    goTo,
    updateNav
}

function goTo(name, ...params) {
    const handler = routes[name]
    handler(ctx, params)
}

export const routing = {
    goTo,
    onNavigate,
    updateNav
}