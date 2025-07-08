import { showView, updateNav } from './utils.js';
import { showCatalogView } from './catalog.js';

const section = document.getElementById('register-view');
section.querySelector('form').addEventListener('submit', onRegister);

export function showRegisterView() { // Handles the register view.
    showView(section);
}
// On form submit, sends registration data to the backend, saves user data, updates nav, and shows the catalog.
async function onRegister(event) {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const email = formData.get('email');
    const password = formData.get('password');
    const rePass = formData.get('rePass');

    try {
        if (!email) { // If the input is empty
            throw new Error('Email is required');
        }
        if (password.length < 3) { // If the password is less characters than 4
            throw new Error('Password must be at least 3 characters long!');
        }
        if (password != rePass) { // If the password does not match with rePass
            throw new Error('Passwords must match!');
        }

        const url = 'http://localhost:3030/users/register'; 
        const options = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email, password })
        };

        const res = await fetch(url, options);

        if (res.ok != true) { // If the POST request is not successful => the status is not OK
            const err = await res.json();
            throw err;
        }

        const data = await res.json();
        const userData = {
            id: data._id,
            accessToken: data.accessToken
        };

        sessionStorage.setItem('userData', JSON.stringify(userData));

        updateNav();
        showCatalogView();
    } catch (error) {
        alert(error.message);
    }
}