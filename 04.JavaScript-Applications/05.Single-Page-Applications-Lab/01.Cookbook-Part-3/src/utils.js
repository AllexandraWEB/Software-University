// Utility functions for navigation and user state:

const main = document.querySelector("main");

let userData = null;

export function getUserData() { // getUserData(): Returns the current user data from memory.
    return userData;
}

export function updateNav() { // updateNav(): Reads user data from sessionStorage and shows/hides nav sections.
    userData = JSON.parse(sessionStorage.getItem("userData"));

    if(userData) {
        document.getElementById("user").style.display = "inline-block";
        document.getElementById("guest").style.display = "none";
    } else {
        document.getElementById("user").style.display = "none";
        document.getElementById("guest").style.display = "inline-block";
    }
}

export function showView(view) { // showView(view): Replaces the <main> content with the given view section.
    main.replaceChildren(view);
}

export function navigate(e, callback) { // navigate(e, callback): Prevents default link behavior and calls the view function.
    e.preventDefault();
    callback();
}