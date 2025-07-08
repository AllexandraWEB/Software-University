// Entry point for the SPA.

// Imports navigation helpers and all view modules.
import { navigate, updateNav } from './utils.js';

import { showCatalogView } from './catalog.js';
import { showLoginView } from './login.js';
import { showRegisterView } from './register.js';
import { showCreateView } from './create.js';
import "./logout.js";

document.getElementById('views').remove(); // Removes the #views div (moves views into main as needed).

updateNav(); // Calls updateNav() to set up the nav bar based on user state, imported from the ./utils.js

// Attaches event listeners to nav links to call the correct view functions using the navigate helper.

document.getElementById('catalog-link').addEventListener('click', e => navigate(e, showCatalogView));
document.getElementById('login-link').addEventListener('click', e => navigate(e, showLoginView));
document.getElementById('register-link').addEventListener('click', e => navigate(e, showRegisterView));
document.getElementById('create-link').addEventListener('click', e => navigate(e, showCreateView));

showCatalogView(); // Shows the catalog view by default.