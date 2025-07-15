import { routing } from "./src/utils/routingModule.js";

Array.from(document.querySelectorAll("div[data-section]")).forEach(section => section.remove());

// Start App
routing.updateNav()
routing.goTo("/")